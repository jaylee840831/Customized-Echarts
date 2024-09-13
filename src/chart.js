import * as echarts from "echarts";

export default class Chart {
  /**
    todo: 定義video、table的option
   
    圖表類型
        圓餅圖(Pie Chart)、曲線圖(Line Chart)、長條圖(Bar Chart)、表格(table)、影像(video)
    
    靜態參數
        建立圖表所需的預設參數，例如:寬高、顏色、字體大小...等
    
    動態參數
        這邊指傳入圖表的數據
    */

  constructor(options) {
    this.options = options;
    this.chart = null;

    if (this.options.dom === null || !this.isDOMElement(this.options.dom)) {
      this.options.onError.call(
        null,
        "this chart DOM can not be used or no found"
      );
    } else {
      if (
        this.options.option === null ||
        Object.keys(this.options.option).length === 0
      ) {
        this.initDefaultOption();
      }

      // 圖表初始化
      this.chart = echarts.getInstanceByDom(this.options.dom);
      this.chart = echarts.init(this.options.dom);
    }
  }

  // 判斷是否為html的dom
  isDOMElement(obj) {
    return (
      typeof obj.nodeType === "number" &&
      typeof obj.querySelector === "function"
    );
  }

  getChartInfo() {
    if (
      this.options.option === null ||
      Object.keys(this.options.option).length === 0
    ) {
      this.initDefaultOption();
    }

    return `chart information => type: ${this.options.type},
      dom id: ${this.options.dom.id}, 
      option: ${JSON.stringify(this.options.option)}`;
  }

  // 取得chart的dom
  getChartDom() {
    return this.options.dom;
  }

  // 載入預設靜態參數
  initDefaultOption() {
    this.options.option = {};

    if (this.options.type === "pie") {
      this.options.option = this.getPieDefaultOption();
    } else if (this.options.type === "line") {
      this.options.option = this.getLineDefaultOption();
      this.options.option.xAxis.axisLabel.formatter = "{value}";
      this.options.option.yAxis.axisLabel.formatter = "{value}";
    } else if (this.options.type === "bar") {
      this.options.option = this.getBarDefaultOption();
    } else if (this.options.type === "table") {
      this.options.option = this.getTableDefaultOption();
    } else if (this.options.type === "video") {
      this.options.option = this.getVideoDefaultOption();
    } else {
      if (typeof this.options.onError === "function") {
        this.options.onError.call(null, "this chart type is undefined");
      }
    }
  }

  // pie chart 預設參數
  getPieDefaultOption() {
    return {
      type: "pie",
      title: {
        text: this.options.title,
        textStyle: {
          fontFamily: "Poppins",
          fontSize: "20px",
        },
        top: "3%",
        bottom: "0%",
        left: "4%",
        right: "0%",
      },
      backgroundColor: "#fff",
      legend: {
        type: "scroll",
        orient: "vertical",
        bottom: "20",
        left: "10%",
        width: "100%",
        height: "30%",
        icon: "rect",
        itemGap: 20,
        itemWidth: 12,
        textStyle: {
          fontFamily: "Poppins",
          fontSize: 13,
          padding: [0, 0, 0, 5],
        },
      },
      series: [
        {
          type: "pie",
          stillShowZeroSum: false,
          center: ["50%", "35%"],
          radius: ["45%", "40%"],
          data: [
            {
              name: "sample1",
              value: 50,
            },
            {
              name: "sample2",
              value: 50,
            },
          ],
          avoidLabelOverlap: true,
          label: {
            show: false,
            position: "center",
            // 圓餅顯示外圈
            // normal: {
            //   show: true,
            //   formatter: '{b}: {c}({d}%)'
            // }
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "26",
              fontWeight: "bold",
              formatter: "{b}\n{d}%",
            },
            focus: "self",
          },
        },
      ],
    };
  }

  // line chart 預設參數
  getLineDefaultOption() {
    return {
      type: "line",
      title: {
        text: this.options.title,
        textStyle: {
          fontFamily: "Poppins",
          fontSize: "20px",
        },
        top: "3%",
        bottom: "0%",
        left: "4%",
        right: "0%",
      },
      grid: {
        width: "70%",
        height: "70%",
        borderWidth: 1,
        top: "23%",
        bottom: "20%",
        left: "15%",
        right: "20%",
      },
      tooltip: {
        show: true,
        trigger: "axis",
      },
      emphasis: {
        focus: "series",
        label: {
          show: false,
          formatter: "",
        },
      },
      backgroundColor: "#fff",
      legend: {
        type: "scroll",
        orient: "horizontal",
        width: "85%",
        top: "10%",
        left: "4%",
        icon: "circle",
        itemGap: 30,
        itemWidth: 9.61,
        textStyle: {
          fontFamily: "Poppins",
          fontSize: 13,
          lineHeight: 30,
          padding: [0, 0, 0, 3],
        },
      },
      xAxis: {
        data: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        name: "(hr)",
        nameTextStyle: {
          padding: [0, 0, 0, -10],
        },
        axisLabel: {
          // 放 formatter
        },
      },
      yAxis: {
        name: "(counts)",
        nameTextStyle: {
          padding: [0, 0, 0, -30],
        },
        minInterval: 1,
        axisLabel: {
          // 放 formatter
        },
      },
      series: [
        {
          name: "sample1",
          data: [100, 200, 300, 400, 500, 600, 700, 800, 800, 800],
          type: "line",
          smooth: true,
          emphasis: { label: { show: true, position: "right" } },
        },
        {
          name: "sample2",
          data: [200, 300, 400, 500, 600, 700, 800, 900, 900, 900],
          type: "line",
          smooth: true,
          emphasis: { label: { show: true, position: "right" } },
        },
      ],
      dataZoom: [
        {
          show: false,
          type: "inside",
          height: 12,
          xAxisIndex: [0],
          bottom: 10,
          start: 0,
          end: 100,
          handleIcon:
            "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
          handleSize: "110%",
          handleStyle: {
            color: "#d3dee5",
          },
          textStyle: {
            color: "#fff",
          },
          borderColor: "#90979c",
        },
      ],
    };
  }

  // bar chart 預設參數
  getBarDefaultOption() {
    return {
      type: "bar",
      title: {
        text: this.options.title,
        textStyle: {
          fontFamily: "Poppins",
          fontSize: "20px",
        },
        top: "3%",
        bottom: "0%",
        left: "4%",
        right: "0%",
      },
      grid: {
        width: "80%",
        height: "70%",
        borderWidth: 1,
        top: "20%",
        bottom: "10%",
        left: "10%",
        right: "5%",
      },
      tooltip: {
        show: true,
        trigger: "axis",
      },
      emphasis: {
        focus: "series",
        label: {
          show: false,
          formatter: "",
        },
      },
      backgroundColor: "#fff",
      legend: {
        type: "scroll",
        orient: "horizontal",
        width: "85%",
        top: "10%",
        left: "4%",
        icon: "circle",
        itemGap: 30,
        itemWidth: 9.61,
        textStyle: {
          fontFamily: "Poppins",
          fontSize: 13,
          lineHeight: 30,
          padding: [0, 0, 0, 3],
        },
      },
      xAxis: {
        type: "category",
        data: ["sample1", "sample2"],
        nameTextStyle: {
          padding: [0, 0, 0, 0],
        },
        axisLabel: {
          interval: 0,
          rotate: 50,
          margin: 5,
        },
        position: { top: "50px" },
      },
      yAxis: {
        type: "value",
        name: "(times)",
        nameTextStyle: {
          padding: [0, 0, 0, -10],
        },
        axisLabel: {
          // formatter
        },
      },
      series: [
        {
          data: [
            {
              value: 30,
            },
            {
              value: 30,
            },
          ],
          type: "bar",
          label: {
            show: true,
            position: "top",
          },
          barWidth: "20",
          itemStyle: {
            borderRadius: [20, 20, 0, 0],
            color: "#307BF4",
          },
        },
      ],
      dataZoom: [
        {
          show: false,
          type: "inside",
          height: 12,
          xAxisIndex: [0],
          bottom: 10,
          start: 0,
          end: 100,
          handleIcon:
            "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
          handleSize: "110%",
          handleStyle: {
            color: "#d3dee5",
          },
          textStyle: {
            color: "#fff",
          },
          borderColor: "#90979c",
        },
      ],
    };
  }

  // table 預設參數
  getTableDefaultOption() {
    return {
      type: "table",
    };
  }

  // video 預設參數
  getVideoDefaultOption() {
    return {
      type: "video",
    };
  }

  /*
    傳入數據
    pie chart -> this.options.option.series[0].data
    {
        name: "",
        value: 0
    }

    line chart -> this.options.option.series
    {
      name: "",
      data: []
    }

    bar chart -> this.options.option.series[0].data
    {
      value: 0
    }
  */
  sendData(datas) {
    console.log("data send");

    try {
      if (this.options.option.type === "line") {
        this.options.option.series = [];
        datas.forEach((item) => this.options.option.series.push(item));
      } else if (this.options.option.type === "bar") {
        this.options.option.series[0].data = [];
        this.options.option.xAxis.data = [];

        datas.data.forEach((item) =>
          this.options.option.series[0].data.push(item)
        );
        datas.xAxis.forEach((item) =>
          this.options.option.xAxis.data.push(item)
        );
      } else {
        this.options.option.series[0].data = [];
        datas.forEach((item) => this.options.option.series[0].data.push(item));
      }
    } catch (error) {
      if (typeof this.options.onError === "function") {
        this.options.onError.call(null, error);
      }
    }
  }

  // 清除數據
  clearData() {
    console.log("data clear");

    try {
      if (this.options.option.type === "line") {
        this.options.option.series = [];
      } else {
        this.options.option.series[0].data = [];
      }
    } catch (error) {
      if (typeof this.options.onError === "function") {
        this.options.onError.call(null, error);
      }
    }
  }

  // 標題設定
  setTitle(fontSize, color, top, bottom, left, right) {
    let title = this.options.option.title;
    let textStyle = this.options.option.title.textStyle;

    title.top = top;
    title.bottom = bottom;
    title.left = left;
    title.right = right;

    textStyle.fontSize = fontSize;
    textStyle.color = color;
  }

  // 背景顏色設定
  setBackGroundColor(backgroundColor) {
    this.options.option.backgroundColor = backgroundColor;
  }

  // 網格設定
  setGrid(width, height, borderWidth, top, bottom, left, right) {
    if (this.isGridChart()) {
      let grid = this.options.option.grid;

      grid.width = width;
      grid.height = height;
      grid.borderWidth = borderWidth;
      grid.top = top;
      grid.bottom = bottom;
      grid.left = left;
      grid.right = right;
    }
  }

  // Legend 設定
  setLegend(
    orient,
    width,
    height,
    top,
    bottom,
    left,
    right,
    icon,
    itemGap,
    itemWidth,
    fontSize,
    color,
    lineHeight,
    padding
  ) {
    let legend = this.options.option.legend;
    let textStyle = this.options.option.legend.textStyle;

    legend.orient = orient;
    legend.width = width;
    legend.height = height;
    legend.top = top;
    legend.bottom = bottom;
    legend.left = left;
    legend.right = right;
    legend.icon = icon;
    legend.itemGap = itemGap;
    legend.itemWidth = itemWidth;

    textStyle.fontSize = fontSize;
    textStyle.color = color;
    textStyle.lineHeight = lineHeight;
    textStyle.padding = padding;
  }

  // 是否在數據上顯示資訊提示
  setTooltip(show) {
    if (this.options.option.type === "pie") {
      this.options.option.series[0].emphasis.label.show = show;
    } else {
      this.options.option.tooltip.show = show;
    }
  }

  // X 軸設定
  setXAxis(data, name, fontSize, color, lineHeight, padding, formatter) {
    if (this.isGridChart()) {
      let xAxis = this.options.option.xAxis;
      let nameTextStyle = this.options.option.xAxis.nameTextStyle;
      let axisLabel = this.options.option.xAxis.axisLabel;

      xAxis.data = data;
      xAxis.name = name;

      nameTextStyle.fontSize = fontSize;
      nameTextStyle.color = color;
      nameTextStyle.lineHeight = lineHeight;
      nameTextStyle.padding = padding;

      axisLabel.formatter = formatter;
    }
  }

  // Y 軸設定
  setYAxis(name, fontSize, color, lineHeight, padding, formatter) {
    if (this.isGridChart()) {
      let yAxis = this.options.option.yAxis;
      let nameTextStyle = this.options.option.yAxis.nameTextStyle;
      let axisLabel = this.options.option.yAxis.axisLabel;

      yAxis.name = name;

      nameTextStyle.fontSize = fontSize;
      nameTextStyle.color = color;
      nameTextStyle.lineHeight = lineHeight;
      nameTextStyle.padding = padding;

      axisLabel.formatter = formatter;
    }
  }

  // 是否為網格圖表
  isGridChart() {
    if (
      this.options.option.type === "line" ||
      this.options.option.type === "bar"
    ) {
      return true;
    }

    return false;
  }

  // 開始畫圖
  draw() {
    console.log("chart draw");

    try {
      setTimeout(() => {
        this.chart.setOption(this.options.option, true);
      }, "1000");
    } catch (error) {
      if (typeof this.options.onError === "function") {
        this.options.onError.call(null, error);
      }
    }
  }

  // 銷毀圖表
  destroy() {
    console.log("chart destroy");
    this.options.dom.remove();
    this.options = null;
    this.chart = null;
  }

  errorHandler(message) {
    return message;
  }
}
