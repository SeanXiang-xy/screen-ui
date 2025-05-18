import echarts, { init, registerMap } from "echarts";
import { ref, onMounted } from "vue";

export default function useChart() {
  const chartRef = ref<HTMLDivElement>();
  let myChart: null | echarts.EChartsType = null;

  const chartInit = () => {
    if (!chartRef.value) return;
    myChart = init(chartRef.value);
  };
  onMounted(chartInit);

  const render = (option: echarts.EChartsOption) => {
    if (!myChart) return;
    myChart.clear();
    myChart.setOption(option);
  };

  return {
    chartRef,
    myChart,
    render,
    chartInit,
    registerMap,
  };
}
