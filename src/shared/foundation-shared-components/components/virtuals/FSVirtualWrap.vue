<template>
  <FSCol
    ref="root"
    class="fs-virtual-wrap"
    :height="$props.height"
    v-bind="$attrs"
    v-resize="resize"
  >
    <FSFadeOut
      ref="rootContainer"
      height="100%"
      width="100%"
      @scroll="onScroll"
      :scrollOutside="$props.scrollOutside"
    >
      <div 
        class="fs-virtual-wrap__container"
        :style="containerStyle"
      >
        <div
          v-for="item in renderedItems"
          class="fs-virtual-wrap__item"
          :key="item.key"
          :style="{
            position: 'absolute',
            left: sizeToVar(item.x),
            top: sizeToVar(item.y),
            height: sizeToVar($props.itemHeight),
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
  </FSCol>
</template>
  
<script lang="ts">
import _ from "lodash";
import { computed, defineComponent, onMounted, onUnmounted, ref, type PropType, type StyleValue } from "vue";

import { sizeToVar, varToSize } from "../../utils";

import FSFadeOut from "../FSFadeOut.vue";
import FSCol from "../FSCol.vue";
  
export default defineComponent({
  name: "FSVirtualWrap",
  components: {
    FSFadeOut,
    FSCol
  },
  props: {
    items: {
      type: Array as PropType<{
        [key: string]: unknown
      }[]>,
      required: true
    },
    itemWidth: {
      type: Number,
      default: 150,
      required: true
    },
    itemHeight: {
      type: Number,
      default: 50,
      required: true
    },
    gap: {
      type: Number,
      default: 0
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: null
    },
    bufferHeight: {
      type: Number,
      default: 50
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
    const root = ref<typeof FSCol | null>(null);
    const rootContainer = ref<typeof FSFadeOut | null>(null);
    
    const scrollOffset = ref(0);
    const actualLeft = ref(0);
    const actualTop = ref(0);
    const actualHeight = ref(varToSize(props.height));
    const actualWidth = ref(0);

    let intersectionObserver: IntersectionObserver | null = null;

    const maxItemsPerRow = computed(() => {
      return Math.floor(actualWidth.value / (props.itemWidth + varToSize(props.gap)));
    });

    const maxWidthPerItem = computed(() => {
      if(maxItemsPerRow.value === 0) {
        return 0;
      }

      return (actualWidth.value - (maxItemsPerRow.value - 1) * varToSize(props.gap)) / maxItemsPerRow.value;
    })

    // calcul des positions de chaque item
    const computedItems = computed(() => {
      if (!props.items.length || maxItemsPerRow.value === 0) {
        return [];
      }

      const result = [];
      const gap = varToSize(props.gap);
      let currentX = 0;
      let currentY = 0;

      for (let i = 0; i < props.items.length; i++) {
        for(let j = 0; j < maxItemsPerRow.value && i + j < props.items.length; j++) {
          const item = props.items[i + j];
          result.push({
            key: i + j,
            x: currentX,
            y: currentY,
            width: maxWidthPerItem.value,
            height: props.itemHeight,
            item: item
          });
          currentX += maxWidthPerItem.value + varToSize(props.gap);
        }
        i += maxItemsPerRow.value - 1; // on saute les items déjà traités
        currentX = 0;
        currentY += props.itemHeight + gap;
      }

      return result;
    });

    const renderedItems = computed(() => {
      return computedItems.value.filter(item => {
        let offset = 0;

        if(!props.height){
          offset = actualTop.value;
        }
        else 
        {
          offset = -scrollOffset.value
        }

        return (
          offset + item.y < actualHeight.value + props.bufferHeight && 
          offset + item.y + props.itemHeight > 0 - props.bufferHeight
        );
      });
    })

    const containerHeight = computed(() => {
      if(!computedItems.value.length) {
        return 0
      }

      const lastItem = computedItems.value[computedItems.value.length - 1];

      return lastItem.y + lastItem.height;
    });

    const containerStyle = computed((): StyleValue => {
      return {
        '--fs-virtual-wrap-height': sizeToVar(containerHeight.value),
      }
    });

    // scroll horizontal
    const onScroll = _.throttle((e: Event): void => {
      const t = e.target as HTMLElement;
      scrollOffset.value = t.scrollTop;
    }, 16, { leading: false });

    // recalcul de la taille & position
    const resize = _.throttle((): void => {
      if (!root.value) {
        return;
      }

      const el = root.value.$el as HTMLElement;
      const rect = el.getBoundingClientRect();

      actualWidth.value = rect.width;
      actualHeight.value = props.height ? rect.height : window.innerHeight;
      actualTop.value = rect.top;
      actualLeft.value = rect.left      
    }, 16, { leading: false });


    onMounted(() => {
      if (!root.value || props.height) {
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
      if (!root.value || props.height) {
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
      actualHeight,
      rootContainer,
      renderedItems,
      containerStyle,
      sizeToVar,
      onScroll,
      resize
    };
  }
});
</script>