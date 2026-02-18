import { onMounted, onBeforeUnmount, type Ref } from 'vue';
import type * as echarts from 'echarts';

export function useResize(chartInstance: Ref<echarts.ECharts | null>) {
  let resizeObserver: ResizeObserver | null = null;

  const resizeChart = () => {
    if (chartInstance.value) {
      chartInstance.value.resize();
    }
  };

  onMounted(() => {
    resizeObserver = new ResizeObserver(() => {
      resizeChart();
    });

    const chartElement = chartInstance.value?.getDom();
    if (chartElement) {
      resizeObserver.observe(chartElement);
    }

    window.addEventListener('resize', resizeChart);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeChart);
    resizeObserver?.disconnect();
    resizeObserver = null;
  });

  return {
    resizeChart
  };
}