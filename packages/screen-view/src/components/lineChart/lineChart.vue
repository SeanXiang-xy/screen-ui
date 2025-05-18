<template>
  <div ref="chartRef" class="line-chart-wrapper"></div>
</template>

<script lang="ts">
export default {
  name: "SLineChart",
};
</script>
<script setup lang="ts">
import "./style/index.less";
import { toRefs, watch, onMounted } from "vue";
import useChart from "../../hooks/useCharts";
import getOptions, { type DataItem } from "./options";

interface Props {
  data?: DataItem[];
  multipleData?: DataItem[][];
  colorList?: string[];
  axisColor?: string;
  axisLineColor?: string;
  grid?: any;
}
const props = withDefaults(defineProps<Props>(), {
  axisColor: "#9FB4EF",
  grid: {
    top: 30,
    left: 30,
    bottom: 30,
    right: 30,
  },
});
const { data, multipleData, colorList, axisColor, axisLineColor, grid } =
  toRefs(props);

const { chartRef, render } = useChart();
const renderChart = () => {
  render(
    getOptions({
      data: data?.value,
      multipleData: multipleData?.value,
      colorList: colorList?.value,
      axisColor: axisColor.value,
      axisLineColor: axisLineColor?.value,
      grid: grid.value,
    })
  );
};
onMounted(renderChart);
if (data) {
  watch(data, renderChart);
}
if (multipleData) {
  watch(multipleData, renderChart);
}
</script>
