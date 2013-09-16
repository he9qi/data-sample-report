$(function ()  
{
  var dataSource = [
  { date: "Sep 15", smp: 49 },
  { date: "Sep 16", smp: 42 },
  { date: "Sep 17", smp: 57 },
  { date: "Sep 18", smp: 50 },
  { date: "Sep 19", smp: 30 },
  { date: "Sep 20", smp: 157 },
  { date: "Sep 21", smp: 463 },
  { date: "Sep 22", smp: 56  },
  { date: "Sep 23", smp: 23 }
  ];

  $("#activity-line").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
      type: "spline",
      argumentField: "date"
    },
    commonAxisSettings: {
      grid: {
          visible: true
      }
    },
    series: [
      { valueField: "smp", name: "number of tweets per day" }
    ],
    tooltip:{
      enabled: true
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    },
    title: "",
    commonPaneSettings: {
      border:{
          visible: true,
          bottom: false
      }
    }
  });
});