function runApp(){
    $("#option1").click(()=>{ 
      UpdateChart(jsondata1);
    });
    $("#option2").click(()=>{ 
      UpdateChart(jsondata2);
    });
    $("#fileLoader").on("change", ()=>{
      var reader = new FileReader();
      reader.onload = ()=> {
        UpdateChart(JSON.parse(reader.result));
      };
      reader.readAsText($("#fileLoader").prop('files')[0]);
    });
}


function UpdateChart(jsonString){
  //delete&remake to reuse canvas
   var chartDiv = $('#myChartDiv');
  chartDiv.html("<canvas id=\"myChart\" width=\"600\" height=\"400\"></canvas>");
  
  //split Json for chart js 
  var xAxis = jsonString.map((e)=> e.index);
  var yAxis = jsonString.map((e)=> e.count);
 
  var chart = $('#myChart')[0].getContext('2d');
  var myChart = new Chart(chart, {
    type: 'line',
    data:  { 
      labels: xAxis, 
      datasets:[{
          label: "indexXcount", 
          data : yAxis,
          borderColor: '#c1b0d9',
          backgroundColor : '#6432a8'
      }]
    },
    options: 
    { 
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Index'
          }},
          y: {
            display: true,
            title: {
              display: true,
              text: 'Count'
            }}
        },
      maintainAspectRatio: false,
      responsive: false
    }
  });
}