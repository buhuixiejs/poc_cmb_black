export const chartConfig = {
  chart1: {
    chartId: "chart1",
    switchCard: {
      show: true,
      typeArr: [
        {
          name: "笔 数",
          type: "1",
          active: true
        },
        {
          name: "人 数",
          type: "2",
          active: false
        }
      ]
    },
    dateCard: {
      show: true,
      dateArr: [
        {
          name: "7d",
          type: "1",
          active: true
        },
        {
          name: "1m",
          type: "2",
          active: false
        },
        {
          name: "1y",
          type: "3",
          active: false
        }
      ]
    },
    showTable: false,

    chartOpt: {
      title: {
        text: ""
      },
      yAxis: {}
    }
  },
  chart2: {
    chartId: "chart2",
    switchCard: {
      show: false,
      typeArr: []
    },
    dateCard: {
      show: true,
      dateArr: [
        {
          name: "7d",
          type: "1",
          active: true
        },
        {
          name: "1m",
          type: "2",
          active: false
        },
        {
          name: "1y",
          type: "3",
          active: false
        }
      ]
    },
    showTable: false,

    chartOpt: {
      title: {
        text: ""
      },
      yAxis: {}
    }
  },
  chart3: {
    chartId: "chart3",
    chartType: "pie",
    switchCard: {
      show: false,
      typeArr: []
    },
    dateCard: {
      show: true,
      dateArr: [
        {
          name: "7d",
          type: "1",
          active: true
        },
        {
          name: "1m",
          type: "2",
          active: false
        },
        {
          name: "1y",
          type: "3",
          active: false
        }
      ]
    },
    showTable: true,

    chartOpt: {
      title: {
        text: "",
        top: "3%"
      },
      yAxis: {}
    }
  },
  chart4: {
    chartId: "chart4",
    switchCard: {
      show: false,
      typeArr: []
    },
    dateCard: {
      show: true,
      dateArr: [
        {
          name: "7d",
          type: "1",
          active: true
        },
        {
          name: "1m",
          type: "2",
          active: false
        },
        {
          name: "1y",
          type: "3",
          active: false
        }
      ]
    },
    showTable: false,
    chartOpt: {
      title: {
        text: ""
      },
      yAxis: {}
    }
  },
  chart5: {
    chartId: "chart5",
    switchCard: {
      show: true,
      typeArr: [
        {
          name: "金 额",
          type: "1",
          active: true
        },
        {
          name: "人 数",
          type: "2",
          active: false
        },
        {
          name: "余 额",
          type: "3",
          active: false
        },
        {
          name: "笔 数",
          type: "4",
          active: false
        }
      ]
    },
    showTable: false,
    dateCard: {
      show: true,
      dateArr: [
        {
          name: "7d",
          type: "1",
          active: true
        },
        {
          name: "1m",
          type: "2",
          active: false
        },
        {
          name: "1y",
          type: "3",
          active: false
        }
      ]
    },
    chartOpt: {
      title: {
        text: "",
        left: "5%"
      },
      yAxis: {}
    }
  },
  chart6: {
    chartId: "chart6",
    chartType: "line",
    switchCard: {
      show: false,
      typeArr: []
    },
    dateCard: {
      show: false,
      dateArr: [
        {
          name: "7d",
          type: "1",
          active: false
        },
        {
          name: "1m",
          type: "2",
          active: true
        },
        {
          name: "1y",
          type: "3",
          active: false
        }
      ]
    },
    showTable: false,
    chartOpt: {
      title: {
        text: "",
        left: "center"
      },
      yAxis: {
        name: "  资金用途异化偏移系数（%）"
      }
    }
  }
};
