# chart module

chart module 可以運用在 HTML 或是前端框架畫出圓餅圖(Pie Chart)、曲線圖(Line Chart)、長條圖(Bar Chart)、表格(table)、影像(video)

## Parameter

傳入的參數分為以下三大項，圖表類型、靜態參數、動態參數

- 圖表類型
  <br> 圓餅圖(Pie Chart)、曲線圖(Line Chart)、長條圖(Bar Chart)、表格(table)、影像(video)

- 靜態參數
  <br>建立圖表所需的預設參數，例如:寬高、顏色、字體大小...等

- 動態參數
  <br>這邊指傳入圖表的數據資料

## Demo

main.html 可供參考

## How to use?
在你要用的地方引入 chart.min.js
```
<script type="text/javascript" src="./dist/chart.min.js"></script>

// 建立dom
const newElement = document.createElement("div");
newElement.id = "chart_1";
newElement.style.width = "400px";
newElement.style.height = "550px";
newElement.style.background = "#ffffff";
newElement.style.margin = "10px";

const newElementDOM = document.getElementById(newElement.id);

// 建立chart
var chart = new Chart({
  type: "pie",
  title: "pie chart",
  dom: newElementDOM,
  option: {},
  onError: function (e) {
    alert(e);
  },
});

// 開始畫圖
chart.draw();
```

<mark>上面程式碼中的 option 若為空值，則使用預設參數來建立圖表，也可以參考以下 option，客製化成自己想要的傳入格式(需注意有些為必要參數，請參考chart.js)</mark>

圓餅圖(Pie Chart)

```
{
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
}
```

長條圖(Bar Chart)

```
{
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
}
```

曲線圖(Line Chart)

```
{
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
}
```

## Chart Module API

- 開始畫圖

  ```
  draw()
  ```

- 載入預設參數

  ```
  initDefaultOption()
  ```

- 取得圖表訊息

  ```
  getChartInfo()
  ```

- 取得圖表的 DOM

  ```
  getChartDom()
  ```

- 取得圓餅圖(Pie Chart)預設參數

  ```
  getPieDefaultOption()
  ```

- 取得曲線圖(Line Chart)預設參數

  ```
  getLineDefaultOption()
  ```

- 取得長條圖(Bar Chart)預設參數

  ```
  getBarDefaultOption()
  ```

- 取得表格(table)預設參數

  ```
  getTableDefaultOption()
  ```

- 取得影像(video)預設參數

  ```
  getVideoDefaultOption()
  ```

- 銷毀圖表

  ```
  destroy()
  ```

- 標題設定

  ```
  setTitle(fontSize, color, top, bottom, left, right)
  ```

  fontSize, color, top, bottom, left, right 資料型態為 String

- 背景顏色設定

  ```
  setBackGroundColor(backgroundColor)
  ```

  backgroundColor 資料型態為 String

- 傳入數據

  ```
  sendData(data)
  ```

  長條圖的 data 資料型態為 Object，其餘為 Object Array，以下為範例

  圓餅圖(Pie Chart)

  ```
  let data = [
    { name: "測試1", value: 30 },
    { name: "測試2", value: 30 },
    { name: "測試3", value: 40 },
  ];

  chart.sendData(data);
  ```

  長條圖(Bar Chart)

  ```
  let data = {
    xAxis: ["測試1", "測試2", "測試3"],
    data: [{ value: 30 }, { value: 150 }, { value: 100 }],
  };

  chart.sendData(data);
  ```

  曲線圖(Line Chart)

  ```
  let data = [
    {
      name: "測試1",
      type: "line",
      smooth: true,
      data: [150, 250, 200, 700, 500, 600, 0, 150, 250, 50],
    },
    {
      name: "測試2",
      type: "line",
      smooth: true,
      data: [500, 150, 300, 700, 600, 100, 100, 600, 250, 50],
    },
    {
      name: "測試3",
      type: "line",
      smooth: true,
      data: [350, 150, 700, 300, 200, 100, 0, 500, 750, 150],
    },
  ];

  chart.sendData(data);
  ```

- 清除數據

  ```
  clearData()
  ```

- 網格設定

  ```
  setGrid(width, height, borderWidth, top, bottom, left, right)
  ```

  width, height, borderWidth, top, bottom, left, right 資料型態為 String，以下為範例

  ```
  chart.setGrid("100%", "70%", "1", "23%", "20%", "15%", "20%");
  ```

- Legend 設定

  ```
  setLegend(orient, width, height, top, bottom, left, right, icon, itemGap, itemWidth, fontSize, color, lineHeight, padding)
  ```

  orient, width, height, top, bottom, left, right, icon, itemGap, itemWidth, fontSize, color, lineHeight 資料型態為 String

  padding 資料型態為 Array

  以下為範例

  ```
  chart.setLegend("horizontal", "auto", "auto", "12%", "0%", "4%", "0%", "circle", "30", "9.61", "13px", "blue", "30", [0, 0, 0, 3]);
  ```

- 在數據上顯示資訊提示

  ```
  setTooltip(show)
  ```

  show 資料型態為 Boolean

- X 軸設定

  ```
  setXAxis(data, name, fontSize, color, lineHeight, padding, formatter);
  ```

  name, fontSize, color, lineHeight, formatter 資料型態為 String

  data、padding 資料型態為 Array

  以下為範例

  ```
  chart.setXAxis(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], "(hr)", "20", "#000000", "", [0, 0, 0, -10], "{value}");
  ```

- Y 軸設定

  ```
  setYAxis(name, fontSize, color, lineHeight, padding, formatter)
  ```

  name, fontSize, color, lineHeight, formatter 資料型態為 String

  padding 資料型態為 Array
