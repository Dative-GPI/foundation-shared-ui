<template>
  <FSChart :option="chartOption" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useDomRenderer } from "@dative-gpi/bones-ui";
import type { EChartsOption, TooltipComponentFormatterCallbackParams } from "echarts";

import FSChart from "@dative-gpi/foundation-shared-visualization/components/FSChart.vue";

import ChartTooltip from "./ChartTooltip.vue";

const DATA = [
  { day: "Mon", value: 120, color: "#5470c6" },
  { day: "Tue", value: 200, color: "#91cc75" },
  { day: "Wed", value: 150, color: "#fac858" },
  { day: "Thu", value: 80,  color: "#ee6666" },
  { day: "Fri", value: 70,  color: "#73c0de" },
  { day: "Sat", value: 110, color: "#3ba272" },
  { day: "Sun", value: 130, color: "#fc8452" },
];

const MAX_VALUE = Math.max(...DATA.map(d => d.value));

export default defineComponent({
  name: "ChartWithTooltip",
  components: { FSChart },
  setup() {
    const renderer = useDomRenderer(ChartTooltip as any);
    const tooltipProps = ref<InstanceType<typeof ChartTooltip>["$props"]>({
      label: "",
      value: 0,
      unit: "",
      color: "#5470c6",
      percentage: 0
    });
    const tooltipHandle = renderer.subscribe(() => tooltipProps.value);
    const tooltipMountPoint = tooltipHandle.getElement({ minWidth: "220px" });

    const formatTooltip = (params: TooltipComponentFormatterCallbackParams): string => {
      if (Array.isArray(params)) {
        return "";
      }

      const item = DATA.find(d => d.day === params.name);
      if (!item) {
        return "";
      }

      tooltipProps.value = {
        label: item.day,
        value: item.value,
        unit: "kWh",
        color: item.color,
        percentage: Math.round((item.value / MAX_VALUE) * 100)
      };

      return tooltipMountPoint.innerHTML;
    };

    const chartOption = computed<EChartsOption>(() => ({
      tooltip: {
        trigger: "item",
        formatter: formatTooltip,
        backgroundColor: "transparent",
        borderWidth: 0,
        padding: 0
      },
      xAxis: {
        type: "category",
        data: DATA.map(d => d.day)
      },
      yAxis: {
        type: "value",
        name: "kWh"
      },
      series: [{
        type: "bar",
        data: DATA.map(d => ({
          value: d.value,
          itemStyle: { color: d.color }
        }))
      }]
    }));

    return { chartOption };
  }
});
</script>
