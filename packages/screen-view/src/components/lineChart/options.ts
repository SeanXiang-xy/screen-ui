export type DataItem = {
  name: string;
  value: string | number;
};

interface Config {
  data?: DataItem[];
  multipleData?: DataItem[][];
  colorList?: string[];
  axisColor: string;
  axisLineColor?: string;
  grid: any;
}
const xAxis = (config: Config) => {
  const list =
    (config.multipleData && config.multipleData[0]) || config.data || [];
  return {
    type: "category",
    data: list.map((item) => item.name),
    axisLabel: {
      color: config.axisColor,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: config.axisLineColor || config.axisColor,
      },
    },
    axisTick: {
      show: false,
    },
  };
};
const yAxis = (config: Config) => {
  return {
    type: "value",
    axisLabel: {
      color: config.axisColor,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: config.axisLineColor || config.axisColor,
      },
    },
    splitLine: {
      lineStyle: {
        color: config.axisColor,
        type: "dashed",
        opacity: 0.3,
      },
    },
  };
};
const series = (config: Config) => {
  const list = config.multipleData || [config.data];

  return list.map((data) => ({
    data: data ? data.map((item) => item.value) : [],
    type: "line",
    areaStyle: {
      opacity: 0.3,
    },
  }));
};
export default function getOptions(config: Config) {
  const options = {
    xAxis: xAxis(config),
    yAxis: yAxis(config),
    grid: config.grid,
    tooltip: {
      trigger: "axis",
      borderWidth: 0,
    },
    series: series(config),
  } as echarts.EChartsOption;
  if (config.colorList) {
    options.color = config.colorList;
  }

  return options;
}
