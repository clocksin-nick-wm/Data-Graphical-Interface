google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['Plant 1', 'Waste Tons'],
        ['Plant 1', 20],
        ['Plant 2', 35],
        ['Plant 3', 55],
        ['Plant 4', 45],
        ['Plant 5', 63]
    ]);

    var options = {
        title: 'Waste Per Week',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Total Population',
            minValue: 0
        },
        vAxis: {
            title: 'Plants with Waste'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}