<template>
  <FSCol
    ref="root"
    :height="$props.height"
    v-bind="$attrs"
    v-resize="resize"
  >
    <FSFadeOut
      v-bind="$attrs"
      height="100%"
      @scroll="onScroll"
    >
      <div 
        class="fs-virtual-col__container"
        :style="containerStyle"
      >
        <div
          v-for="item in renderedItems"
          :key="item.key"
          :style="{
            position: 'absolute',
            top: sizeToVar(item.y),
            width: '100%',
            height: sizeToVar(item.height)
          }"
        >
          <slot
            name="item"
            v-bind="{ item: item.item }"
          />
        </div>
      </div>
    </FSFadeOut>
  </FSCol>
</template>
  
<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref, type PropType, type StyleValue } from "vue";

import { sizeToVar, varToSize } from "../../utils";

import FSFadeOut from "../FSFadeOut.vue";
import FSCol from "../FSCol.vue";
  
export default defineComponent({
  name: "FSVirtualCol",
  components: {
    FSFadeOut,
    FSCol
  },
  props: {
    items: {
      type: Array as PropType<{
        height: number;
        [key: string]: unknown
      }[]>,
      required: true
    },
    gap: {
      type: Number,
      required: false,
      default: 0
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    bufferHeight: {
      type: Number,
      required: false,
      default: 0
    },
    scrollableParentSelectors: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
  },
  setup(props) {
    const deltaOffsetY = ref(0);
    const localOffsetY = ref(0);
    const globalOffsetY = ref(0);

    const actualTop = ref(0);
    const actualHeight = ref(varToSize(props.height));
    const root = ref<typeof FSCol | null>(null);

    const computedItems = computed(() => {
      if (!props.items.length) {
        return [];
      }

      const result = [];
      let currentY = 0;

      for (let index = 0; index < props.items.length; index++) {
        const item = props.items[index];
        result.push({
          key: index,
          x: 0,
          y: currentY,
          width: '100%',
          height: item.height,
          item: item
        });
        currentY += item.height + varToSize(props.gap);
      }

      return result;
    });

    const offsetY = computed(() => localOffsetY.value + globalOffsetY.value + deltaOffsetY.value);

    const renderedItems = computed(() => {
      return computedItems.value.filter(item => {
        
        // console.log(item.item.name, "item.y", item.y, "<", offsetY.value + actualHeight.value + props.bufferHeight);
        // console.log(item.item.name, "item.y + item.height", item.y + item.height, ">", offsetY.value - props.bufferHeight);

        return (
          item.y < offsetY.value + actualHeight.value + props.bufferHeight && 
          item.y + item.height > offsetY.value - props.bufferHeight
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
        '--fs-virtual-col-height': sizeToVar(containerHeight.value),
      }
    })

    const onScroll = (event: Event): void => {
      const target = event.target as HTMLElement;
      localOffsetY.value = target.scrollTop;
    }

    const resize = (): void => {
      if(!root.value) {
        return;
      }

      console.log("resizing");

      const element = root.value.$el as HTMLElement;
      const visible = getVisiblePart(element);

      actualHeight.value = visible.height;

      if(!actualTop.value) {
        actualTop.value = visible.top;
      }

      // console.log(visible);
    }

    const computePosition = () => {
      let scrollTop = 0;

      console.log(window.scrollY  || document.documentElement.scrollTop);
      console.log(actualTop.value);

      scrollTop += window.scrollY || document.documentElement.scrollTop;

      for(const node of parents) {
        scrollTop += node.scrollTop;
      }

      globalOffsetY.value = scrollTop - actualTop.value;
    }

    const parents : Element[] = []

    onMounted(() => {
      if(!root.value || props.height) {
        return;
      }

      const element = root.value.$el as HTMLElement;
      const selectors = [ ".fs-fade-out", ...props.scrollableParentSelectors ];

      for(const selector of selectors) {
        let node = element.closest(selector);

        while(node)
        {
          parents.push(node);
          node = node.parentElement?.closest(selector) || null;
        }
      }

      document.addEventListener("scroll", computePosition);

      for(const node of parents) {
        node.addEventListener("scroll", computePosition);
      }
    })

    onUnmounted(() => {
      if(!root.value || props.height) {
        return;
      }

      document.removeEventListener("scroll", computePosition);

      for(const node of parents) {
        node.removeEventListener("scroll", computePosition);
      }
    })

    const getVisiblePart = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();

      // Calcul des bornes horizontales visibles
      const visibleLeft   = rect.left;
      // Calcul des bornes verticales visibles
      const visibleTop    = rect.top;

      const visibleWidth  = Math.min(rect.width, window.innerWidth);
      const visibleHeight = Math.min(rect.height, window.innerHeight);

      return {
        left:   visibleLeft,
        top:    visibleTop,
        width:  visibleWidth,
        height: visibleHeight,
        // ratio de visibilité (0 à 1)
        ratio: (visibleWidth * visibleHeight) / (rect.width * rect.height)
      };
    }

    return {
      root,
      offsetY,
      renderedItems,
      containerStyle,
      sizeToVar,
      onScroll,
      resize
    };
  }
});
</script>