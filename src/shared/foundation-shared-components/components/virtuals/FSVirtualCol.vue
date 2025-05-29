<template>
  <FSCol
    ref="root"
    class="fs-virtual-col"
    :height="$props.height"
    v-bind="$attrs"
    v-resize="refresh"
  >
    <FSFadeOut
      height="100%"
      @scroll="onScroll"
      :scrollOutside="$props.scrollOutside"
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
import { computed, defineComponent, ref, type PropType, type StyleValue } from "vue";

import { sizeToVar, varToSize } from "../../utils";
import { useElementPosition, useScroll } from "../../composables";

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
    itemKey: {
      type: String,
      required: true,
      default: 'id',
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
      default: 150
    },
    scrollOutside: {
      type: Boolean,
      default: true
    },
    scrollableParentSelectors: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
  },
  setup(props) {
    const root = ref<typeof FSCol | null>(null);
    const { height, top, scrollTop, refresh, onScroll } = useElementPosition(root);
    useScroll(root, refresh, [".fs-fade-out", ...props.scrollableParentSelectors]);

    // Calcul de la hauteur effective à utiliser pour le rendu virtuel
    const renderedHeight = computed(() => {
      return props.height ? height.value : window.innerHeight;
    });

    const computedItems = computed(() => {
      if (!props.items.length) {
        return [];
      }

      const result = [];
      let currentY = 0;

      for (let index = 0; index < props.items.length; index++) {
        const item = props.items[index];
        result.push({
          key: props.itemKey in item ? item[props.itemKey] as string : index,
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
          offset = top.value;
        } else {
          offset = -scrollTop.value;
        }

        return (
          offset + item.y < renderedHeight.value + props.bufferHeight && 
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

    return {
      root,
      renderedItems,
      containerStyle,
      sizeToVar,
      onScroll,
      refresh
    };
  }
});
</script>