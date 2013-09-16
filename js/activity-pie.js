$(function ()  
{
  var dataSource = [
  { act: "tweets", count: 384 },
  { act: "replies", count: 301 },
  { act: "retweets", count: 242 }
  ];

  $("#activity-pie").dxPieChart({
    dataSource: dataSource,
    title: "",
    legend: {
      horizontalAlignment: "center",
      verticalAlignment: "bottom",
      margin: 0
    },
    series: [{
      argumentField: "act",
      valueField: "count",
      label: {
          visible: true,
          font: {
              size: 16
          },
          connector: {
              visible: true,
              width: 0.5
          },
          position: "columns",
          customizeText: function(arg) {
              return arg.valueText + " ( " + arg.percentText + ")";
          }
      }
    }]
  });
});