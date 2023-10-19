// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the canvas element
    var canvas = document.getElementById("caffeineGraph");

    // Create a chart on the canvas
    var ctx = canvas.getContext("2d");
    var caffeineChart = new Chart(ctx, {
        type: "line", // Line chart
        data: {
            labels: [], // Array of time labels
            datasets: [{
                label: "Caffeine Level",
                data: [], // Array of caffeine level data
                borderColor: "rgba(75, 192, 192, 1)",
                fill: false // No fill under the line
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "time",
                    title: {
                        display: true,
                        text: "Time"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Caffeine Level (mg)"
                    }
                }
            }
        }
    });

    // Function to update the chart data
    function updateChart(timeLabels, caffeineLevels) {
        caffeineChart.data.labels = timeLabels;
        caffeineChart.data.datasets[0].data = caffeineLevels;
        caffeineChart.update();
    }

    // Example data (you will calculate this with your algorithm)
    var timeLabels = ["2023-10-20T08:00:00", "2023-10-20T09:00:00", "2023-10-20T10:00:00"];
    var caffeineLevels = [200, 150, 100];

    // Call the updateChart function with your data
    updateChart(timeLabels, caffeineLevels);
});
