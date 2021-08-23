var labels = jsondata.map((e)=> e.index);
var linedata = jsondata.map((e)=> e.count);

var chart = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(chart, {
    type: 'line',
    data:  { 
        labels: labels, 
        datasets:[{
            label: "indexXcount", 
            data : linedata,
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
            text: 'index'
          }},
          y: {
            display: true,
            title: {
              display: true,
              text: 'count'
            }}
        },
        maintainAspectRatio: false
    }
});