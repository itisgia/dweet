


google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(getData);

function getData() {
  var jsonData = $.ajax({
      url:https:"https://dweet.io:443/get/dweets/for/000019b2aaef",
      thing: "000019b2aaef",
      dataType: "json",
      type: "GET",
      success: function (data) {
        console.log("has loadeed");
      },
      error: function functionName(error) {
        console.log("ERROR");
        console.log(error);
      }
    }).responseText;

    var data = new google.visualization.DataTable(jsonData);
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, {width: 400, height: 240});
}
