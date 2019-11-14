// 调色盘
let colorPlate = [
  "#5792f6",
  "#fe7d00",
  "#4fe492",
  "#ec7682",
  "#75d5ff",
  "#c682fa",
  "#f4b461",
  "#00c8ca",
  "#e04e4e",
  "#758caa",
  "#41c148",
  "#4178c1",
  "#ac2bbb",
  "#b4bb2b",
  "#2bb8bb",
  "#50394c",
  "#c91c4c",
  "#e0a31e"
];
// 图表线的颜色
let lineColor = "#4f4980";
// 坐标字的颜色
let labelColor = "#28f1ed";
// 标题组件
let title = json => {
  return {
    text: json.title.text,
    textStyle: {
      color: labelColor,
      fontSize: "12",
      fontWeight: "400"
    },
    left: json.title.left || "3%",
    top: json.title.top || "6%"
  };
};
// 提示框组件
let tooltip = () => {
  return {
    trigger: "axis",
    formatter: "{b} <br/>{c}"
  };
};
// 图例组件
let legend = json => {
  return {
    data: json.legendArr,
    right: 5,
    top: 33,
    itemWidth: 16,
    itemHeight: 10,
    textStyle: {
      color: colorPlate
    },
    type: "scroll"
  };
};
// 坐标组件
let grid = () => {
  return {
    left: "6%",
    top: "23%",
    right: "4%",
    bottom: "5%",
    containLabel: true
  };
};

//X轴组件
let xAxis = json => {
  return [
    {
      type: "category",
      data: json.xAxisData,
      gridIndex: 0,
      axisLabel: {
        show: true,
        color: labelColor
      },
      axisLine: {
        lineStyle: {
          color: lineColor
        }
      },
      axisTick: {
        alignWithLabel: true
      }
    }
  ];
};
//滚动条组件
let dataZoom = json => {
  return [
    {
      type: "inside",
      zoomLock: true,
      start: 0,
      end: json.xAxisData.length > 15 ? 100 : 100
    }
  ];
};
//Y轴组件
let yAxis = json => {
  return [
    {
      type: "value",
      name: json.yAxis.name || "",
      nameTextStyle: {
        color: labelColor,
        padding: [0, 0, 0, 5]
      },
      axisLine: {
        lineStyle: {
          color: lineColor
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: labelColor
        }
      },
      axisTick: {
        alignWithLabel: true
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: lineColor
        }
      }
    }
  ];
};
let series = json => {
  if (json.chartType === "bar") {
    return [
      {
        type: "bar",
        barWidth: "15px",
        data: json.dataArr,
        //配置样式
        itemStyle: {
          //通常情况下：
          normal: {
            color: function(params) {
              var colorList = ["rgb(104,113,143)", "rgb(87,166,255)"];
              return colorList[params.dataIndex % 2];
            }
          }
        }
      }
    ];
  } else if (json.chartType === "line") {
    return [
      {
        type: "line",
        itemStyle: {
          normal: {
            lineStyle: {
              color: "#3b72c4"
            },
            borderColor: colorPlate[0]
          }
        },
        data: json.dataArr
      }
    ];
  }
};
//柱形图
export let barCharts = (example, json) => {
  let option = {
    title: title(json),
    tooltip: tooltip(json),
    dataZoom: dataZoom(json),
    grid: grid(json),
    legend: legend(json),
    xAxis: xAxis(json),
    yAxis: yAxis(json),
    series: series(json)
  };
  example.setOption(option);
};
//线形图
export let lineCharts = (example, json) => {
  let option = {
    title: title(json),
    grid: grid(json),
    tooltip: tooltip(json),
    dataZoom: dataZoom(json),
    legend: legend(json),
    xAxis: xAxis(json),
    yAxis: yAxis(json),
    series: series(json)
  };
  example.setOption(option);
};
//饼图
export let pieCharts = (example, json) => {
  // tableArr:为了保存计算后的Percent
  json.tableArr = [];
  let option = {
    title: title(json),
    grid: grid(json),
    tooltip: {
      trigger: "item",
      formatter: "{b}:({d}%)"
    },
    legend: {
      right: 35,
      bottom: 30,
      textStyle: {
        fontSize: 12,
        color: labelColor
      },
      data: json.legendArr
    },
    series: [
      {
        name: "",
        type: "pie",
        selectedMode: "single",
        center: ["51%", "46%"],
        radius: ["25%", "26%"],
        label: {
          normal: {
            position: "inner"
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        color: colorPlate
      },
      {
        name: "",
        type: "pie",
        center: ["51%", "46%"],
        radius: ["27%", "40%"],
        label: {
          normal: {
            formatter: params => {
              json.tableArr.push({
                name: params.name,
                percent: params.percent
              });
              return "{a|" + `${params.name}: }${params.percent}%`;
            },
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              a: {
                color: "#afb6c8",
                lineHeight: 22,
                align: "center"
              }
            }
          }
        },
        color: colorPlate,
        data: json.dataArr
      }
    ]
  };
  example.setOption(option);
};
