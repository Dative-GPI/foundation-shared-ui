<template>
  <FSRow
    ref="root"
    class="fs-virtual-row"
    :width="$props.width || 'hug'"
    v-bind="$attrs"
    v-resize="refresh"
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
import { computed, defineComponent, ref, type PropType, type StyleValue } from "vue";

import { sizeToVar, varToSize } from "../../utils";
import { useScroll, useElementPosition } from "../../composables";
  
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
    itemKey: {
      type: String,
      required: true,
      default: 'id'
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
    const root = ref<typeof FSRow | null>(null);
    const { width, left, scrollLeft, refresh, onScroll } = useElementPosition(root);
    useScroll(root, refresh, [".fs-fade-out", ...props.scrollableParentSelectors]);

    // Calcul de la largeur effective à utiliser pour le rendu virtuel
    const renderedWidth = computed(() => {
      return props.width ? width.value : window.innerWidth;
    });

    // calcul des positions X de chaque item
    const computedItems = computed(() => {
      if (!props.items.length) {
        return [];
      }

      const result = [];
      let currentX = 0;

      for (let index = 0; index < props.items.length; index++) {
        const item = props.items[index];
        result.push({
          key: props.itemKey in item ? item[props.itemKey] as string : index,
          x: currentX,
          y: 0,
          width: item.width,
          height: '100%',
          item: item
        });
        currentX += item.width + varToSize(props.gap);
      }

      return result;
    });

    // filtre ce qui est dans le buffer horizontal
    const renderedItems = computed(() => {
      return computedItems.value.filter(item => {
        let offset = 0;

        if(!props.width){
          offset = left.value;
        } else {
          offset = -scrollLeft.value;
        }

        return (
          offset + item.x < renderedWidth.value + props.bufferWidth &&
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