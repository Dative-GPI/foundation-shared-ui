<template>
  <FSCol
    :height="$props.height"
  >
    <div
      ref="chartEl"
      style="width: 100%; height: 100%"
    />
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, type PropType, ref, watch } from "vue";
import { type ECharts, type EChartsOption, init as initECharts } from "echarts";
import { useResize } from "@dative-gpi/bones-ui/composables";
import FSCol from "../components/FSCol.vue";

export default defineComponent({
  name: "FSChart",
  components: {
    FSCol
  },
  props: {
    option: {
      type: Object as PropType<EChartsOption>,
      required: true
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  setup(props) {
    const chartEl = ref<HTMLDivElement | null>(null);
    let chart: ECharts | null = null;

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
      chartEl 
    };
  }
});
</script>
