<template>
  <FSCol
    :height="$props.height"
  >
    <FSRow
      v-if="$slots.legend"
      :style="{ flexDirection }"
      align="center-center"
      height="fill"
      :wrap="false"
      gap="16px"
    >
      <FSCol
        :height="legendHeight"
        :width="legendWidth"
        style="flex-grow: 0;"
        align="center-center"
        gap="16px"
      >
        <slot
          name="legend"
        />
      </FSCol>
      <FSCol
        height="fill"
        align="center-center"
      >
        <div
          ref="chartEl"
          class="fs-chart-wrapper"
        />
      </FSCol>
    </FSRow>
    <div
      v-else
      ref="chartEl"
      class="fs-chart-wrapper"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, type PropType, ref, watch } from "vue";
import { type ECharts, type EChartsOption, init as initECharts } from "echarts";
import { useResize } from "@dative-gpi/bones-ui/composables";
import { type LegendPosition, LegendPositions } from "../models";

export default defineComponent({
  name: "FSChart",
  props: {
    option: {
      type: Object as PropType<EChartsOption>,
      required: true
    },
    height: {
      type: String,
      default: "100%"
    },
    legendPosition: {
      type: String as PropType<LegendPosition>,
      default: LegendPositions.Bottom
    }
  },
  setup(props) {
    const chartEl = ref<HTMLDivElement | null>(null);
    let chart: ECharts | null = null;

    const flexDirection = computed(() => {
      switch (props.legendPosition) {
        case LegendPositions.Left:   
          return "row";
        case LegendPositions.Right:  
          return "row-reverse";
        case LegendPositions.Top:    
          return "column";
        default:               
          return "column-reverse";
      }
    });

    const isVertical = computed(() =>
      props.legendPosition === LegendPositions.Top || props.legendPosition === LegendPositions.Bottom
    );

    const legendHeight = computed(() => isVertical.value ? "hug" : "fill");
    const legendWidth = computed(() => isVertical.value ? "fill" : "hug");

    useResize(() => chartEl.value, () => {
      chart?.resize();
    });

    onMounted(() => {
      if (!chartEl.value) {
        return;
      }
      chart = initECharts(chartEl.value);
      chart.setOption(props.option);
    });

    watch(
      () => props.option,
      (newOption) => {
        chart?.setOption(newOption, true);
      },
      { deep: true }
    );

    onBeforeUnmount(() => {
      chart?.dispose();
      chart = null;
    });

    return {
      chartEl,
      legendWidth,
      legendHeight,
      flexDirection
    };
  }
});
</script>
