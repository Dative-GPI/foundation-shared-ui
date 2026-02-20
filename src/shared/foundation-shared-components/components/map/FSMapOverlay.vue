<template>
  <v-overlay
    v-if="isExtraSmall"
    :modelValue="$props.mode === MapOverlayPositions.Expand"
    :contained="true"
    @click="$emit('update:mode', MapOverlayPositions.Collapse)"
    zIndex="0"
  />
  <div
    v-show="isExtraSmall"
    ref="mobileOverlayWrapper"
    class="fs-map-overlay-mobile"
    :style="{ height: $props.mode === MapOverlayPositions.Expand ? '90%' : ($props.mode === MapOverlayPositions.Half ? '60%' : 'auto') }"
  >
    <FSCard
      width="100%"
      height="100%"
      :elevation="true"
      :border="false"
    >
      <FSCol
        height="100%"
        gap="0px"
      >
        <FSRow
          align="center-center"
          style="cursor: pointer;"
          @touchstart="onClick"
          @mousedown="onClick"
        >
          <FSIcon>
            {{ $props.mode === MapOverlayPositions.Expand ? 'mdi-chevron-down' : 'mdi-chevron-up' }}
          </FSIcon>
        </FSRow>
        <slot
          v-if="$props.mode === MapOverlayPositions.Collapse"
          name="collapsed"
        />
        <FSCol
          v-if="$props.mode !== MapOverlayPositions.Collapse"
          height="fill"
          style="min-height: 0;"
        >
          <slot
            name="body"
          />
        </FSCol>
      </FSCol>
    </FSCard>
  </div>
  <FSCard
    v-show="!isExtraSmall"
    class="fs-map-overlay-desktop"
    ref="desktopOverlay"
    :elevation="true"
    height="100%"
    :border="false"
  >
    <FSCol
      height="fill"
    >
      <slot
        name="body"
      />
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent, type PropType, onUnmounted, onMounted, ref } from "vue";

import { useBreakpoints } from "../../composables";

import { MapOverlayPositions } from '@dative-gpi/foundation-shared-components/models';

import FSCard from "../FSCard.vue";
import FSIcon from "../FSIcon.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSMapOverlay",
  components: {
    FSCard,
    FSIcon,
    FSCol,
    FSRow
  },
  props: {
    mode: {
      type: String as PropType<MapOverlayPositions>,
      required: false,
      default: MapOverlayPositions.Collapse
    }
  },
  emits: ["update:mode", "update:height", "update:width"],
  setup(props, { emit }) {
    const { isExtraSmall, isTouchScreenEnabled } = useBreakpoints();

    const mobileOverlayWrapper = ref<HTMLDivElement | null>(null);
    const desktopOverlay = ref<InstanceType<typeof FSCard> | null>(null);

    const mobileResizeObserver = ref<ResizeObserver | null>(null);
    const desktopResizeObserver = ref<ResizeObserver | null>(null);

    const onClick = (): void => {
      if (props.mode === MapOverlayPositions.Expand) {
        emit("update:mode", MapOverlayPositions.Collapse);
        return;
      }
      emit("update:mode", MapOverlayPositions.Expand);
    }

    onMounted(() => {
      mobileResizeObserver.value = new ResizeObserver(entries => {
        entries.forEach((entry) => {
          emit("update:height", entry.contentRect.height);
        });
      });

      desktopResizeObserver.value = new ResizeObserver(entries => {
        entries.forEach((entry) => {
          emit("update:width", entry.contentRect.width);
        });
      });

      if (mobileOverlayWrapper.value) {
        mobileResizeObserver.value.observe(mobileOverlayWrapper.value);
        emit("update:height", mobileOverlayWrapper.value.offsetHeight);
      }

      if (desktopOverlay.value) {
        desktopResizeObserver.value.observe(desktopOverlay.value.$el);
        emit("update:width", desktopOverlay.value.$el.offsetWidth);
      }
    });

    onUnmounted((): void => {
      if (mobileResizeObserver.value) {
        mobileResizeObserver.value.disconnect();
      }
      if (desktopResizeObserver.value) {
        desktopResizeObserver.value.disconnect();
      }
    });

    return {
      mobileOverlayWrapper,
      isTouchScreenEnabled,
      MapOverlayPositions,
      desktopOverlay,
      isExtraSmall,
      onClick
    };
  }
});
</script>