<template>
  <FSCol
    ref="root"
    class="fs-virtual-grid"
    :height="$props.height"
    v-bind="$attrs"
    v-resize="refresh"
  >
    <FSFadeOut
      height="100%"
      @scroll="onScroll"
      :scrollOutside="$props.scrollOutside"
      :hideHorizontalOverflow="false"
    >
      <div 
        class="fs-virtual-grid__container"
        :style="containerStyle"
      >
        <template
          v-if="$props.showHeader"
        >
          <div
            class="fs-virtual-grid__header"
          >
            <div
              v-for="(header, col) in $props.columns"
              :key="col"
              class="fs-virtual-grid__header-cell"
              :style="{
                gridRow: 1,
                gridColumn: col + 1,
              }"
            >
              <slot 
                name="header"
                v-bind="{ header }"
              >
                {{ header.text }}
              </slot>
            </div>
          </div>
        </template>

        <div
          v-for="item in renderedItems"
          :key="item.key"
          class="fs-virtual-grid__row"
          :style="{ '--fs-virtual-grid-row': item.row + 2 }"
        >
          <slot 
            name="row"
            v-bind="item"
          >
            <div
              v-for="(column, col) in $props.columns"
              :key="col"
              class="fs-virtual-grid__cell"
              :style="{ gridColumn: col + 1 }"
            >
              <slot 
                :name="`cell.${column.value}`"
                v-bind="item"
              >
                {{ item.item[column.value] }}
              </slot>
            </div>
          </slot>
        </div>
      </div>
    </FSFadeOut>
  </FSCol>
</template>

<script lang="ts">
import { ref, computed, defineComponent, type PropType, type StyleValue } from "vue";
import { useElementPosition } from "../../composables";
import { sizeToVar, varToSize } from "../../utils";

import FSFadeOut from "../FSFadeOut.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSVirtualGrid",
  components: {
    FSFadeOut,
    FSCol
  },
  props: {
    items: {
      type: Array as PropType<any[]>,
      required: true
    },
    itemKey: {
      type: String,
      required: false,
      default: "id"
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    gap: {
      type: Number,
      required: false,
      default: 0
    },
    columns: {
      type: Array as PropType<Column[]>,
      required: true
    },
    rowHeight: {
      type: Number,
      required: true
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
      default: () => []
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    topOffset: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const root = ref<HTMLElement | null>(null);
    const wrapper = ref<HTMLElement | null>(null);
    const fakeScrollbar = ref<HTMLElement | null>(null);

    const { top, scrollTop, refresh, onScroll, viewportTop, viewportBottom, width } = useElementPosition(root, [".fs-fade-out", ...props.scrollableParentSelectors]);

    const visibleWindow = computed(() => {
      let absTop = viewportTop.value - props.bufferHeight;
      let absBottom = viewportBottom.value + props.bufferHeight;
      return { absTop, absBottom };
    });

    const computedItems = computed(() => {
      if (!props.items.length) {
        return [];
      }

      return props.items.map((item, index) => {
        return {
          key: props.itemKey in item ? item[props.itemKey] : index,
          row: index,
          item: item
        }
      });
    });

    const renderedItems = computed(() => {
      const { absTop, absBottom } = visibleWindow.value;

      return computedItems.value.filter((item, index) => {
        const row = index;
        const itemTop = row * (props.rowHeight + props.gap) + top.value - scrollTop.value;
        const itemBottom = itemTop + props.rowHeight;

        return itemBottom > absTop && itemTop < absBottom
      })
    });

    const columnsWidth = computed(() => {
      const columns = props.columns.map(col => varToSize(col.width || 100));
      const totalWidth = columns.reduce((acc, width) => acc + width, 0) + (props.columns.length - 1) * varToSize(props.gap);
      const growableWidth = props.columns.filter(col => col.grow).reduce((acc, col) => acc + varToSize(col.width || 100), 0);
      
      if(totalWidth > width.value) {
        return columns;
      }

      const remainingWidth = width.value - totalWidth;
      const growableColumns = props.columns.filter(col => col.grow);

      const multiplyFactor = growableColumns.length > 0 ? remainingWidth / growableWidth : 1;

      return columns.map((width, index) => {
        if (props.columns[index].grow) {
          return varToSize(width) * (1 + multiplyFactor);
        }
        return varToSize(width);
      });
    });

    const containerStyle = computed(() : StyleValue => ({
      "--fs-virtual-grid-top": (Math.max(viewportTop.value, props.topOffset) - top.value + scrollTop.value) + "px",
      "--fs-virtual-grid-rows-count": (props.items.length + 1).toString(),
      "--fs-virtual-grid-row-height": sizeToVar(props.rowHeight),
      "--fs-virtual-grid-template-columns": columnsWidth.value.map(size => sizeToVar(size)).join(" "),
      "--fs-virtual-grid-gap": sizeToVar(props.gap),
      "--fs-virtual-grid-height": (props.items.length + 1) * (varToSize(props.rowHeight) + varToSize(props.gap)) - varToSize(props.gap) + "px",
    }));

    return {
      viewportTop,
      top,
      root,
      wrapper,
      fakeScrollbar,
      renderedItems,
      containerStyle,
      sizeToVar,
      rowHeight: props.rowHeight,
      refresh,
      onScroll
    };
  }
});


interface Column {
  text?: string | null;
  value: string;
  index: number;
  hidden: boolean;
  width?: string | number | null;
  grow?: boolean | null;  

  sortable?: boolean | null;
  sort?: ((a: any, b: any) => number) | null;
  sortRaw?: ((a: any, b: any) => number) | null;

  filterable?: boolean | null;
  fixedFilters?: { value: any, text: string }[] | null;
  methodFilter?: ((value: any, property: any) => boolean) | null;
  methodFilterRaw?: ((value: any, item: any) => boolean) | null;
  filter?: ((value: any, search: string, item: any) => boolean) | null;
}
</script>