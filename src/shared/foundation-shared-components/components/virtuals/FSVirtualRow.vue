<template>
  <FSRow
    ref="root"
    :width="$props.width || 'hug'"
    v-bind="$attrs"
    v-resize="resize"
  >
    <FSFadeOut
      :hideHorizontalOverflow="false"
      :hideVerticalOverflow="true"
      :scrollOutside="$props.scrollOutside"
      height="100%"
      width="100%"
      @scroll="onScroll"
    >
      <div 
        class="fs-virtual-row__container"
        :style="containerStyle"
      >
        <div
          v-for="item in renderedItems"
          :key="item.key"
          :style="{
            position: 'absolute',
            left: sizeToVar(item.x),
            height: '100%',
            width: sizeToVar(item.width)
          }"
        >
          <slot
            name="item"
            v-bind="item"
          />
        </div>
      </div>
    </FSFadeOut>
  </FSRow>
</template>
  
<script lang="ts">
import _ from "lodash";
import { computed, defineComponent, onMounted, onUnmounted, ref, type PropType, type StyleValue } from "vue";

import { sizeToVar, varToSize } from "../../utils";

import FSFadeOut from "../FSFadeOut.vue";
import FSRow from "../FSRow.vue";
  
export default defineComponent({
  name: "FSVirtualRow",
  components: {
    FSFadeOut,
    FSRow
  },
  props: {
    items: {
      type: Array as PropType<{
        width: number;
        [key: string]: unknown
      }[]>,
      required: true
    },
    gap: {
      type: Number,
      default: 0
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: null
    },
    bufferWidth: {
      type: Number,
      default: 150
    },
    scrollOutside: {
      type: Boolean,
      default: true
    },
    scrollableParentSelectors: {
      type: Array as PropType<string[]>,
      default: () => []
    },
  },
  setup(props) {
    const parents: Element[] = [];
    const root = ref<typeof FSRow | null>(null);
    
    const scrollOffset = ref(0);
    const actualLeft = ref(0);
    const actualWidth = ref(varToSize(props.width));

    let intersectionObserver: IntersectionObserver | null = null;

    // calcul des positions X de chaque item
    const computedItems = computed(() => {
      if (!props.items.length) {
        return [];
      }

      const result = [];
      let currentX = 0;

      for (let i = 0; i < props.items.length; i++) {
        const it = props.items[i];
        result.push({
          key: i,
          x: currentX,
          y: 0,
          width: it.width,
          height: '100%',
          item: it
        });
        currentX += it.width + varToSize(props.gap);
      }

      return result;
    });

    // filtre ce qui est dans le buffer horizontal
    const renderedItems = computed(() => {
      return computedItems.value.filter(item => {
        let offset = 0;

        if(!props.width){
          offset = actualLeft.value;
        }
        else 
        {
          offset = -scrollOffset.value
        }

        return (
          offset + item.x < actualWidth.value + props.bufferWidth &&
          offset + item.x + item.width > 0 - props.bufferWidth
        );
      });
    });

    // largeur totale du container
    const containerWidth = computed(() => {
      if (!computedItems.value.length) {
        return 0;
      }

      const last = computedItems.value[computedItems.value.length - 1];

      return last.x + last.width;
    });

    const containerStyle = computed((): StyleValue => {
      return {
        '--fs-virtual-row-width': sizeToVar(containerWidth.value),
      }
    });

    // scroll horizontal
    const onScroll = (e: Event): void => {
      const t = e.target as HTMLElement;
      scrollOffset.value = t.scrollLeft;
    };

    // recalcul de la taille & position
    const resize = _.throttle((): void => {
      if (!root.value) {
        return;
      }

      const el = root.value.$el as HTMLElement;
      const rect = el.getBoundingClientRect();

      actualWidth.value = props.width ? rect.width : window.innerWidth;
      actualLeft.value = rect.left
    }, 16, { leading: true });

    onMounted(() => {
      if (!root.value || props.width) {
        return;
      }

      const element = root.value.$el as HTMLElement;
      const selectors = [ ".fs-fade-out", ...props.scrollableParentSelectors ];

      for (const selector of selectors) {
        let node = element.closest(selector);

        while (node) 
        {
          parents.push(node);
          node = node.parentElement?.closest(selector) || null;
        }
      }

      intersectionObserver = new IntersectionObserver(resize, {
        root: null,
        threshold: Array.from({ length: 10 }, (_, i) => i / 10)
      });
      intersectionObserver.observe(element);

      document.addEventListener("scroll", resize);
      for (const p of parents) {
        p.addEventListener("scroll", resize);
      }
    });

    onUnmounted(() => {
      if (!root.value || props.width) {
        return;
      }

      if(intersectionObserver){
        intersectionObserver.disconnect();
        intersectionObserver = null;
      }

      document.removeEventListener("scroll", resize);

      for (const p of parents) {
        p.removeEventListener("scroll", resize);
      }
    });

    return {
      root,
      renderedItems,
      containerStyle,
      sizeToVar,
      onScroll,
      resize
    };
  }
});
</script>