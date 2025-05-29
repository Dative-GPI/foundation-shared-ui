<template>
  <FSCol
    ref="root"
    class="fs-virtual-wrap"
    :height="$props.height"
    v-bind="$attrs"
    v-resize="refresh"
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
import { computed, defineComponent, ref, type PropType, type StyleValue } from "vue";

import { sizeToVar, varToSize } from "../../utils";
import { useElementPosition } from "../../composables";

import FSFadeOut from "../FSFadeOut.vue";
import FSCol from "../FSCol.vue";
import { uuidv4 } from "@dative-gpi/bones-ui";
  
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
    itemKey: {
      type: String,
      default: "id",
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
    const root = ref<typeof FSCol | null>(null);
    // Utilisation du nouveau useElementPosition avec selectors pour parents scrollables
    const {
      top, width, scrollTop, refresh, onScroll, viewportTop, viewportBottom
    } = useElementPosition(root, [".fs-fade-out", ...props.scrollableParentSelectors]);

    const maxItemsPerRow = computed(() => {
      return Math.floor(width.value / (props.itemWidth + varToSize(props.gap)));
    });

    const maxWidthPerItem = computed(() => {
      if(maxItemsPerRow.value === 0) {
        return 0;
      }
      return (width.value - (maxItemsPerRow.value - 1) * varToSize(props.gap)) / maxItemsPerRow.value;
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
            key: props.itemKey in item ? item[props.itemKey] as string : uuidv4(),
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

    // Virtualisation verticale robuste
    const visibleWindow = computed(() => {
      let absTop = viewportTop.value - props.bufferHeight;
      let absBottom = viewportBottom.value + props.bufferHeight;
      return { absTop, absBottom };
    });

    const renderedItems = computed(() => {
      const { absTop, absBottom } = visibleWindow.value;
      return computedItems.value.filter(item => {
        // Position absolue de l'item dans le viewport
        // item.y = position relative dans le container
        // scrollTop.value = scroll interne (0 si pas de scroll)
        const itemTop = top.value + item.y - scrollTop.value;
        const itemBottom = itemTop + props.itemHeight;
        // L'item est visible s'il intersecte la fenêtre visible
        return itemBottom > absTop && itemTop < absBottom;
      });
    });

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