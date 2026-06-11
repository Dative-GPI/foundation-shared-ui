<template>
  <FSRow
    v-if="$slots.legend"
    :style="{ flexDirection }"
    align="center-center"
    height="fill"
    :wrap="false"
    gap="32px"
  >
    <FSCol
      height="fill"
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
        style="width: 100%; height: 100%"
      />
    </FSCol>
  </FSRow>
  <FSCol
    v-else
    :height="$props.height"
  >
    <div
      ref="chartEl"
      style="width: 100%; height: 100%"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, type PropType, ref, watch } from "vue";
import { type ECharts, type EChartsOption, init as initECharts } from "echarts";
import { useResize } from "@dative-gpi/bones-ui/composables";
import FSCol from "../components/FSCol.vue";
import FSRow from "../components/FSRow.vue";

export default defineComponent({
  name: "FSChart",
  components: {
    FSCol,
    FSRow
  },
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
      type: String as PropType<"top" | "bottom" | "left" | "right">,
      required: false,
      default: "bottom"
    }
  },
  setup(props) {
    const chartEl = ref<HTMLDivElement | null>(null);
    let chart: ECharts | null = null;

    const flexDirection = computed(() => {
      switch (props.legendPosition) {
        case "left":   return "row";
        case "right":  return "row-reverse";
        case "top":    return "column";
        default:       return "column-reverse";
      }
    });

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
      flexDirection
    };
  }
});
</script>
