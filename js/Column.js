      google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawColumnChart);
    function drawColumnChart() {
      var data_column = google.visualization.arrayToDataTable([
['Skill', 'Count',{ role: 'style' }],
          ['Communication Skill', 16966,''],
 ['Documentation', 15181,''],
 ['SQL', 13065,''],
 ['Java', 12375,''],
 ['Troubleshooting', 9953,''],
 ['Oracle', 8359,''],
 ['Reporting', 8184,''],
 ['Project Management', 8054,''],
 ['Problem Solving', 7169,''],
 ['Software Development Life Cycle', 6483,'']
      ]);

      var options_column = {
        title: "Top 10 Skills in the Entire Industry (for year 2017)",
        width: 600,
        height: 600
        
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_div"));
      chart.draw(data_column, options_column);
  }