<template>
  <div
    class="fs-lottie"
    :style="style"
    v-bind="$attrs"
  >
    <div
      ref="containerRef"
      class="fs-lottie-container"
    />
    <FSLoader
      v-if="failed || ($props.loading && !ready)"
      class="fs-lottie-load"
      height="100%"
      width="100%"
      :borderRadius="$props.borderRadius"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, type PropType, ref, type StyleValue, toRaw, watch } from "vue";
import lottie, { type AnimationConfigWithData, type AnimationItem } from "lottie-web";
import { strFromU8, unzipSync } from "fflate";

import { sizeToVar, varToSize } from "@dative-gpi/foundation-shared-components/utils";

import FSLoader from "@dative-gpi/foundation-shared-components/components/FSLoader.vue";

const DEFAULT_ANIMATION_ID = "default";

export default defineComponent({
  name: "FSLottieUI",
  components: {
    FSLoader
  },
  inheritAttrs: false,
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    aspectRatio: {
      type: Number as PropType<number | null>,
      required: false,
      default: 1
    },
    animationData: {
      type: [Object, String] as PropType<object | string | null>,
      required: false,
      default: null
    },
    animationId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    source: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    },
    cover: {
      type: Boolean,
      required: false,
      default: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    loop: {
      type: [Boolean, Number] as PropType<boolean | number>,
      required: false,
      default: true
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true
    },
    speed: {
      type: Number,
      required: false,
      default: 1
    }
  },
  emits: ["ready", "error", "loaded", "update:animationId"],
  setup(props, { emit }) {
    const containerRef = ref<HTMLDivElement | null>(null);
    const ready = ref(false);
    const failed = ref(false);
    const animations = ref<string[]>([]);

    let animation: AnimationItem | null = null;
    let animationsData: Record<string, object> = {};
    let activeAnimationId: string | null = null;
    let loadId = 0;

    const style = computed((): StyleValue => ({
      "--fs-lottie-border-radius": sizeToVar(props.borderRadius),
      "--fs-lottie-height"       : computedHeight.value,
      "--fs-lottie-width"        : computedWidth.value
    }));

    const computedHeight = computed((): string | undefined => {
      if (props.height) {
        return sizeToVar(props.height);
      }
      if (props.width) {
        if (typeof (props.width) === "string") {
          return undefined;
        }
        if (props.aspectRatio) {
          return sizeToVar(varToSize(props.width) / props.aspectRatio);
        }
        return sizeToVar(props.width);
      }
      return undefined;
    });

    const computedWidth = computed((): string | undefined => {
      if (props.width) {
        return sizeToVar(props.width);
      }
      if (props.height) {
        if (typeof (props.height) === "string") {
          return undefined;
        }
        if (props.aspectRatio) {
          return sizeToVar(varToSize(props.height) * props.aspectRatio);
        }
        return sizeToVar(props.height);
      }
      return undefined;
    });

    const parsedData = computed((): object | null => {
      if (typeof props.animationData === "string") {
        try {
          return JSON.parse(props.animationData);
        }
        catch {
          return null;
        }
      }
      return toRaw(props.animationData);
    });

    // Returns the animations of the file, by id: a plain Lottie JSON holds a single one, a .lottie may hold several
    const fetchAnimations = async (): Promise<Record<string, object>> => {
      if (parsedData.value) {
        return { [DEFAULT_ANIMATION_ID]: parsedData.value };
      }
      if (!props.source) {
        return {};
      }
      const response = await fetch(props.source);
      if (!response.ok) {
        throw new Error(`Lottie file could not be fetched (${response.status})`);
      }
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (strFromU8(bytes.subarray(0, 2)) !== "PK") {
        return { [DEFAULT_ANIMATION_ID]: JSON.parse(strFromU8(bytes)) };
      }
      // A .lottie file is a zip archive: a manifest.json listing the animations, and one Lottie JSON per animation
      const files = unzipSync(bytes);
      const manifest: { animations: { id: string }[] } = JSON.parse(strFromU8(files["manifest.json"]));
      return Object.fromEntries(manifest.animations.map(({ id }) => {
        const file = files[`a/${id}.json`] ?? files[`animations/${id}.json`]; // dotLottie v2 / v1
        return [id, JSON.parse(strFromU8(file))];
      }));
    };

    const destroy = (): void => {
      animation?.destroy();
      animation = null;
    };

    const mount = (): void => {
      destroy();
      ready.value = false;

      activeAnimationId = props.animationId && animationsData[props.animationId] ? props.animationId : (animations.value[0] ?? null);
      if (!containerRef.value || !activeAnimationId) {
        return;
      }
      if (activeAnimationId !== props.animationId) {
        emit("update:animationId", activeAnimationId);
      }

      // lottie-web mutates the data it is given, so each instance gets its own copy
      animation = lottie.loadAnimation({
        container: containerRef.value,
        renderer: "svg",
        loop: props.loop,
        autoplay: props.autoplay,
        animationData: structuredClone(animationsData[activeAnimationId]),
        rendererSettings: {
          preserveAspectRatio: props.cover ? "xMidYMid slice" : "xMidYMid meet"
        }
      } as AnimationConfigWithData<"svg">);

      animation.setSpeed(props.speed);
      animation.addEventListener("DOMLoaded", () => {
        ready.value = true;
        emit("ready");
      });
    };

    const load = async (): Promise<void> => {
      const currentLoadId = ++loadId;
      failed.value = false;
      try {
        const data = await fetchAnimations();
        if (currentLoadId !== loadId) {
          return;
        }
        animationsData = data;
        animations.value = Object.keys(data);
        emit("loaded", animations.value);
        mount();
      }
      catch {
        if (currentLoadId === loadId) {
          destroy();
          failed.value = true;
          emit("error");
        }
      }
    };

    const play = (): void => animation?.play();
    const pause = (): void => animation?.pause();
    const stop = (): void => animation?.stop();

    onMounted(load);
    onBeforeUnmount(destroy);

    watch([() => props.source, () => parsedData.value], load);
    watch([() => props.loop, () => props.autoplay, () => props.cover], mount);
    watch(() => props.animationId, () => {
      if (props.animationId !== activeAnimationId) {
        mount();
      }
    });
    watch(() => props.speed, () => animation?.setSpeed(props.speed));

    return {
      animations,
      containerRef,
      failed,
      ready,
      style,
      play,
      pause,
      stop
    };
  }
});
</script>
