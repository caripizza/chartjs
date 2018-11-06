/* exported draw drawGraphs */

function draw() {
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

// ---------------------------
function drawGraphs() {
	// line chart data
	var buyerData = {
		labels : ["January","February","March","April","May","June"],
		datasets : [
		{
            fillColor : "rgba(172,194,132,0.4)",
            strokeColor : "#ACC26D",
            pointColor : "#fff",
            pointStrokeColor : "#9DB86D",
            data : [203,156,99,251,305,247]
			}
		]
	}
	
	// get line chart canvas
	var buyers = document.getElementById('buyers').getContext('2d');

	// draw line chart
	new Chart(buyers).Line(buyerData);
	
	// pie chart data
	var pieData = [
		{
			value: 20,
			color:"#878BB6"
		},
		{
			value : 40,
			color : "#4ACAB4"
		},
		{
			value : 10,
			color : "#FF8153"
		},
		{
			value : 30,
			color : "#FFEA88"
		}
	];

	// pie chart options
	var pieOptions = {
		segmentShowStroke : false,
		animateScale : true
	}
	
	// get pie chart canvas
	var countries= document.getElementById("countries").getContext("2d");
	
	// draw pie chart
	new Chart(countries).Pie(pieData, pieOptions);
	
	// bar chart data
	var barData = {
	labels : ["January","February","March","April","May","June"],
	datasets : [
		{
			fillColor : "rgba(200,300,1000,0.2)",
			strokeColor : "rgba(255, 206, 86, 0.2)",
			data : [456,479,324,569,702,600]
		},
		{
			fillColor : "rgba(73,188,170,0.4)",
			strokeColor : "rgba(72,174,209,0.4)",
			data : [364,504,605,400,345,320]
		}
		]
	}
	
	// get bar chart canvas
	var income = document.getElementById("income").getContext("2d");
	
	// draw bar chart
	new Chart(income).Bar(barData);
}