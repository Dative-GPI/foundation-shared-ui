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
            v-bind="item"
          />
        </div>
      </div>
    </FSFadeOut>
  </FSCol>
</template>
  
<script lang="ts">
import _ from "lodash";
import { computed, defineComponent, onMounted, onUnmounted, ref, type PropType, type StyleValue, nextTick } from "vue";

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
      default: 100
    },
    scrollableParentSelectors: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
  },
  setup(props) {
    const parents : Element[] = []
    const root = ref<typeof FSCol | null>(null);
    
    const scrollOffset = ref(0);
    
    const actualTop = ref(0);
    const actualHeight = ref(varToSize(props.height) || 100);

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
          offset + item.y + item.height > 0 - props.bufferHeight
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
      scrollOffset.value = target.scrollTop;
    }

    const resize = _.throttle((): void => {
      console.log("resize");
      if(!root.value) {
        return;
      }
      const element = root.value.$el as HTMLElement;
      const rect = element.getBoundingClientRect();
  
      actualHeight.value = Math.max(100, Math.min(rect.height, window.innerHeight));
      actualTop.value = rect.top;
    }, 16, {leading: true});


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

      document.addEventListener("scroll", resize);

      for(const node of parents) {
        node.addEventListener("scroll", resize);
      }
    })

    onUnmounted(() => {
      if(!root.value || props.height) {
        return;
      }

      document.removeEventListener("scroll", resize);

      for(const node of parents) {
        node.removeEventListener("scroll", resize);
      }
    })

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