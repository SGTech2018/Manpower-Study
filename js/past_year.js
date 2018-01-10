// *****************
// Draw the Area Chart
// ******************
// Define
$("#yearchart_div").hide();
var titles_past = new Array();
var year = 2016;
Array.prototype.remove = function() {
  var what, a = arguments, L = a.length, ax;
  while (L && this.length) {
    what = a[--L];
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1);
    }
  }
  return this;
};
google.charts.load('current', {'packages':['corechart']});
// JQuery
$( document ).ready(function() {
  $(".job-button").click(function(){
    var $this = $(this);
    if(!titles_past.includes($this.val())){
      titles_past.push($this.val());
      if(titles_past.length != 0)
      {
        $("#areachart_div").show();
        google.charts.setOnLoadCallback(drawAreaChart);
      }
    }
    else{
      titles_past.remove($this.val());
      google.charts.setOnLoadCallback(drawAreaChart);
      if(titles_past.length == 0){
        $("#areachart_div").hide();
      }

    }});

  $(".year-button").click(function(){
    var $this = $(this);
    $("#yearchart_div").show();
    year = $this.val();

    google.charts.setOnLoadCallback(drawColumnChart);
    console.log(year);
  }); 

    }); // document ready

function drawColumnChart(){
  console.log("invoked");
  var data_2016 = google.visualization.arrayToDataTable([
    ['Skill', 'Count',{ role: 'style' }],
    ['Communication Skill', 4251,''],
    ['Documentation', 2934,''],
    ['SQL', 2593,''],
    ['Java', 2338,''],
    ['Troubleshooting', 2014,''],
    ['Oracle',1971,''],
    ['MS Word',1923,''],
    ['Reporting',1871,''],
    ['Unix',1659,''],
    ['Consulting',1600,'']
    ]);

  var data_2015 = google.visualization.arrayToDataTable([
    ['Skill', 'Count',{ role: 'style' }],
    ['Communication Skill', 1785,''],
    ['SQL', 1249,''],
    ['Documentation', 1126,''],
    ['Java', 1056,''],
    ['Oracle', 987,''],
    ['Troubleshooting',945,''],
    ['Reporting',810,''],
    ['Probem Solving',738,''],
    ['Unix',696,''],
    ['Project Management',642,'']
    ]);

  var data_2014 = google.visualization.arrayToDataTable([
    ['Skill', 'Count',{ role: 'style' }],
    ['Communication Skill', 3292,''],
    ['SQL', 2175,''],
    ['Troubleshooting', 1835,''],
    ['Java', 1799,''],
    ['Documentation', 1793,''],
    ['Oracle',1779,''],
    ['Reporting',1396,''],
    ['Project Management',1141,''],
    ['Problem Solving', 1112,''],
    ['MS Word',1097,'']
    ]);

  if(year == 2014){
    data_column = data_2014;
  }else if(year == 2015){
    data_column = data_2015;
  }else if(year == 2016){
    data_column = data_2016;
  }

  var options_column = {
    title: "Top 5 Skills in the Whole Industry",
    width: 600,
    height: 600

  };
  var chart = new google.visualization.ColumnChart(document.getElementById("yearchart_div"));
  chart.draw(data_column, options_column);
  
}

function drawAreaChart() {
  var data00 = ['Year', '2014', '2015', '2016', '2017'];
  var data01 = ['Software Developer',14.32,27.75, 30.12,16.64];
  var data02 = ['Business Related',10.44,22.33,17.74,5.31];
  var data03 = ['Project Manager', 9.53,10.36, 12.97,6.69]; 
  var data04 = ['System Administrator',9.94,5.73,8.57, 6.81];
  var data05 = ['IT Analyst', 15.78,11.94,7.51, 4.83]; //
  var data06 = ['Test', 3.79,8.15,4.48,4.08 ];//
  var data07 = ['Technical Support',12.12, 5.73, 2.60, 5.23];
  var data08 = ['Business Analyst',10.44,4.21,1.99,4.65]

  var array = new Array();
  console.log(titles_past);
  array.push(data00);
  if(titles_past.includes('1')){
    array.push(data01);
  }
  if(titles_past.includes('2')){
    array.push(data02);
  }
  if(titles_past.includes('3')){
    array.push(data03);
  }
  if(titles_past.includes('4')){
    array.push(data04);
  }
  if(titles_past.includes('5')){
    array.push(data05);
  }
  if(titles_past.includes('6')){
    array.push(data06);
  }
  if(titles_past.includes('7')){
    array.push(data07);
  }
  if(titles_past.includes('8')){
    array.push(data08);
  }

  var traverse_array = new Array();
  for (var i = 0; i < 5; i ++){
    line = new Array();
    for(var j = 0; j< titles_past.length+1; j++){   
      line.push(array[j][i]);
    }
    traverse_array.push(line);
  }
  console.log(traverse_array);

  var data = new google.visualization.arrayToDataTable(traverse_array);
  var options = {
    title: 'Percentage',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0},
    width: 1000,
    height: 300
  };

  var chart = new google.visualization.AreaChart(document.getElementById('areachart_div'));
  chart.draw(data, options);
}