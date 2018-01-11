
// **********
// Draw the Skill Table
// *************************
var data01_2 = [['Java', 'Java', 'Communication Skills','Java'],
['Sql','Sql','Documentation','SQL'],
['Communication Skills','Communication Skills','Java','Documentation'],
['Oracle','Oracle','SQL','Communication Skills'],
['Documentation','Documentation','Oracle','Javascript']
]; // Software Dveloper
var data02_2 = 
[['Communication Skills', 'Communication Skills', 'Communication Skills','Communication Skills'],
['Marketing','SAP','Reporting','Marketing'],
['Reporting','Documentation','Marketing','Business Development'],
['Project Management','Consulting','Documentation','Leadership'],
['Leadership','Oracle','Project Management','Information System']
]; // Biz Related
var data03_2 = [['Project Management', 'Project Management', 'Project Management','Project Management'],
['Communication Skills','Communication Skills','SAP','Communication Skills'],
['Reporting','Reporting','Communication Skills','Reporting'],
['Leadership','Leadership','Documentation','Documentation'],
['Documentation','Problem Solving','Reporting','Leadership']
]; // Project Manager
var data04_2 = [['Troubleshooting', 'Troubleshooting', 'Communication Skills','Troubleshooting'],
['Communication Skills','Documentation','Documentation','Communication Skills'],
['Linux','Active Directory','Troubleshooting','Documentation'],
['Documentation','Linux','SQL','Linux'],
['Unix','Communication Skills','Problem Solving','Operating System']
]; // System Administrator
var data05_2 = [
['Communication Skills','Communication Skills','Communication Skills','Documentation'],
['SQL','Oracle','SQL','Communication Skills'],
['Documentation','SQL','Documentation','SQL'],
['Oracle','Reporting','Java','Java'],
['Java', 'Unix', 'Oracle','Oracle'],
]; // IT Analyst
var data06_2 = [
['Communication Skills','Communication Skills','Communication Skills','Documentation'],
['Test Case', 'Documentation', 'Reporting','Communication Skills'],
['Sql','Reporting','Test Case','SQL'],
['Automation','SQL','Documentation','Java'],
['MS Word','Test Caseh','Automation','Oracle']
]; // Test
var data07_2 = [['Troubleshooting', 'Troubleshooting', 'Communication Skills','Troubleshooting'],
['Communication Skills','Communication Skills','Troubleshooting','Communication Skills'],
['Documentation','Documentation','Technical Support','Documentation'],
['Operating System','MS Word','Unix','Operating System'],
['MS Word','SQL','Oracle','Information System']
]; // Technical Support
var data08_2 = [['Communication', 'Busness Requirement', 'Consulting','Business Requirement'],
['Business Requirement','Communication Skills','MS Word','Documentation'],
['Project Management','Business Analysis','Business Analysis','Communication Skills'],
['Documentation','Documentation','Java','SQL'],
['Oracle','Project Management','Communication Skills','Software Development Life Cycle']
]; // Biz Analyst

function drawTableChart2(index){
  var num;
  var title;
  if(index == "1"){
    num = data01_2;
    title = "Software Developer";
  }else if(index == "2"){
    num = data02_2;
    title = "Business Related Jobs";
  }else if(index == "3"){
    num = data03_2;
    title = "Project Manager";
  }else if(index == "4"){
    num = data04_2;
    title = "System Administrator";
  }else if(index == "5"){
    num = data05_2;
    title = "IT Analyst";
  }else if(index == "6"){
    num = data06_2;
    title = "Test";
  }else if(index == "7"){
    num = data07_2;
    title = "Technical Support";
  }else if(index == "8"){
    num = data08_2;
    title = "Business Analyst";
  }

  console.log(num);

    //Build an array containing Customer records.
    var headline = new Array();
    headline.push(["2014", "2015", "2016","2017"]); 
    var position = headline.concat(num);

    //Create a HTML Table element.
    var table = document.createElement("table");
    table.style.color = "white";
    table.style.background = "#884f4e";
    
    //Get the count of columns.
    var columnCount = position[0].length;
    
    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");   
      headerCell.align="center";
      headerCell.innerHTML = position[0][i];
      headerCell.width = "220px";
      headerCell.bgColor = "#c59b9a";
      headerCell.height = "30px";
      //headerCell.style.border = "thick solid white";
      row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 1; i < position.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
        var cell = row.insertCell(-1);
        cell.align="center";
        cell.height = "30px";
        cell.innerHTML = position[i][j];
        cell.className += "table-cell2";
        //cell.style.border = "thick solid white";
      }
    }

    var table_name = "tablechart2_div"+index;
//var jquery_table_name = "."+table_name;
//$(jquery_table_name).show();
console.log(table_name);
var dvTable = document.getElementById(table_name);
dvTable.innerHTML = "";
dvTable.appendChild(table);
table.className += ("tablechart2_format");

var h2_name = "text-before-table"+index;
var h2_title = document.getElementById(h2_name);
h2_title.innerHTML = "Top 5 Skills Transit for "+title;
} // draw table chart 2

// *****************
// Draw the Area Chart
// ******************
// Define
//$("#yearchart_div").hide();
var titles_past = new Array();
var year = 2013;

// Remove function
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

// Load Google Chart
google.charts.load('current', {'packages':['corechart']});

// JQuery
$( document ).ready(function() {
  // Jobs
  $(".job-button").click(function(){
    var $this = $(this);
     //     $(".table-element").hide();
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
    }
      // change color
      if(!$(this).hasClass('change-color')){
        $(this).addClass('change-color');
      }
      else{
        $(this).removeClass('change-color');
      }

      for(var i = 1; i < 9; i++){
        var table_name = "#tablechart2_div"+i.toString();
        var h2_name = "#text-before-table"+i.toString();
        if(titles_past.includes(i.toString())){
          drawTableChart2(i.toString());

          $(table_name).show();
          $(h2_name).show();
        }else{
          $(table_name).hide();
          $(h2_name).hide();
        }
      }
      
  }); // job-button

  // Years
  $(".year-button").click(function(){
    var $this = $(this);
    // change color
    if(!$(this).hasClass('change-color')){
      $(".year-button").removeClass('change-color');
      $(this).addClass('change-color');

    }
    else{
      $(this).removeClass('change-color');
    }

    // hide and show
    if(year == $this.val()){
      year = 2013;
      $("#yearchart_div").hide();
      $("#placeholder-yearchart").show();
    }
    else{
      $("#placeholder-yearchart").hide();
      $("#yearchart_div").show();
    year = $this.val();
        google.charts.setOnLoadCallback(drawColumnChart);
    function drawColumnChart(){
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
        title: "Top 10 Skills in the Whole Industry For Year " + year,
        width: 600,
        height: 500,
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("yearchart_div"));
      chart.draw(data_column, options_column);

    }
  }
    if(!$('#yearchart_div').hasClass('yearchart')){
      $('#yearchart_div').addClass('yearchart');
    }


    console.log(year);
  }); 
}); // document ready




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




