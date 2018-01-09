// *****************
// Draw the Area Chart
// ******************
// Define
var titles_past = new Array();
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
    }); // document ready


function drawAreaChart() {
  var data00 = ['Year', '2014', '2015', '2016', '2017'];
  var data01 = ['Software Developer',14.32,27.75, 30.12,16.64];
  var data02 = ['Business Related',10.44,22.33,17.74,5.31];
  var data03 = ['System Administration',9.94,5.76,15.3, 6.81];
  var data04 = ['Project Manager', 9.53,10.74, 12.98,6.69];
  var data05 = ['Test', 3.79,17.22,4.48, 4.08];
  var data06 = ['Business Analyst', 10.44,6.42,2.00, 4.65];
  var data07 = ['IT Analyst', 15.78, 0, 0, 4.83];

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
    title: 'Job Titles Along the Years',
    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0},
    width: 1000,
    height: 300
  };

  var chart = new google.visualization.AreaChart(document.getElementById('areachart_div'));
  chart.draw(data, options);
}