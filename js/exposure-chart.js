$(function ()  {
  var dataSource = [
  { state: "< 100", tweetsCount: 528 },
  { state: "< 1k", tweetsCount: 1287 },
  { state: "< 10k", tweetsCount: 372 },
  { state: "< 100k", tweetsCount: 48 },
  { state: "> 100k", tweetsCount: 21 }
  ];

  $("#exposure-chart").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
      argumentField: "state",
      type: "bar",
      hoverMode: "allArgumentPoints",
      selectionMode: "allArgumentPoints",
      label: {
          visible: true,
          format: "fixedPoint",
          precision: 0
      }
    },
    series: [
      { valueField: "tweetsCount", name: "Bars show number tweets sent by user with that many followers" }
    ],
    title: "",
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    },
    pointClick: function (point) {
      this.select();
    }
  });
});