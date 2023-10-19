// script.js



document.addEventListener("DOMContentLoaded", function() {
    // Initialize a context for the canvas
    var canvas = document.getElementById("Graph");
    var ctx = canvas.getContext("2d");

    // Get the input element by its ID
    var inputCoffee = document.getElementById("coffeeAmount");

    // Get the value of the input element
    var inputCoffeeValue = inputCoffee.value;

    // Initial dummy data
    var data = {
        labels: ["2:00", "6:00", "10:00", "16:00", "20:00"],
        datasets: [{
            label: "Dummy Graph",
            data: [30, 60, 90, 120, 150],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        }]
    };

    // Create the chart
    var dummyGraph = new Chart(ctx, {
        type: "line", // Bar chart type
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Function to update the graph with new data
    function updateGraph() {
        // Generate new dummy data (random numbers)
        var newData = data.datasets[0].data.map(function() {
            return Math.floor(Math.random() * 50);
        });

        // Update the graph's data
        dummyGraph.data.datasets[0].data = newData;

        // Update the chart
        dummyGraph.update();
    }

    // Add event listener to the "Update Graph" button
    var updateGraphButton = document.getElementById("calculateButton");
    updateGraphButton.addEventListener("click", updateGraph);
});


/*
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
*/
