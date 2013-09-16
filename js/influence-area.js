$(function ()  
{
  var dataSource = [
    { time: "Sep 15", retweets: 34, comments: 13 },
    { time: "Sep 16", retweets: 133, comments: 90 },
    { time: "Sep 17", retweets: 201, comments: 123 },
    { time: "Sep 18", retweets: 419, comments: 184 },
    { time: "Sep 19", retweets: 521, comments: 243 },
    { time: "Sep 20", retweets: 659, comments: 382 },
    { time: "Sep 21", retweets: 729, comments: 466 },
    { time: "Sep 22", retweets: 816, comments: 513 }
  ];

  $("#influence-area").dxChart({
    dataSource: dataSource,
    commonSeriesSettings: {
      type: "area",
      argumentField: "time"
    },
    series: [
      { valueField: "retweets", name: "retweets" },
      { valueField: "comments", name: "comments" }
    ],
    title: "",
    argumentAxis:{
      valueMarginsEnabled: false
    },
    valueAxis:{
    label: {
    // format: "millions"
    }
    },
    legend: {
      verticalAlignment: "bottom",
      horizontalAlignment: "center"
    }
  });
});