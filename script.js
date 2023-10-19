// script.js


document.addEventListener("DOMContentLoaded", function () {
    // Initialize a context for the canvas
    var canvas = document.getElementById("Graph");
    var ctx = canvas.getContext("2d");

    // Get the input element by its ID
    var inputCoffee = document.getElementById("coffeeAmount");

    // Get the input element by its ID
    var inputTime = document.getElementById("currentTime");



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
        type: "line", // Line chart type
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Function to generate half life values
    function generateHalvedValues(inputCoffee, numValues) {
        const values = [inputCoffee];

        for (let i = 1; i < numValues; i++) {
            const halvedValue = values[i - 1] / 2;
            values.push(halvedValue);
        }

        return values;
    }


    // Function to generate labels based on user input time
    function generateLabels(userInputTime, numLabels) {
        // Convert the user input time (e.g., "7:30am") to a Date object
        const userInputDate = new Date(`2023-01-01T${userInputTime}`);

        // Initialize an array to store the labels
        const labels = [];

        // Add the user's input time as the first label
        const formattedLabel = `${userInputDate.getHours()}:${userInputDate.getMinutes()}${userInputDate.getHours() >= 12 ? 'pm' : 'am'}`;
        labels.push(formattedLabel);

        // Loop to generate the rest of the labels
        for (let i = 1; i < numLabels; i++) {
            // Increment the date by 4 hours
            userInputDate.setHours(userInputDate.getHours() + 4);

            // Format the label including minutes
            const formattedLabel = `${userInputDate.getHours()}:${userInputDate.getMinutes()}${userInputDate.getHours() >= 12 ? 'pm' : 'am'}`;

            labels.push(formattedLabel);
        }

        return labels;
    }


    // Function to update the labels in the chart
    function updateLabels(inputTime) {
        // Generate new labels based on the user input time
        const newLabels = generateLabels(inputTime, data.labels.length);
        console.log(newLabels.values);

        // Update the chart's dataset with the new labels
        dummyGraph.data.labels = newLabels;

        // Update the chart
        dummyGraph.update();
    }
    // Example usage:
    const numLabels = 5; // Number of labels to generate


    // Add event listener to the "Update Graph" button
    var updateGraphButton = document.getElementById("calculateButton");
    updateGraphButton.addEventListener("click", function () {
        var inputCoffeeValue = parseFloat(inputCoffee.value);
        var inputTime = document.getElementById("currentTime"); // Get the input element by ID
        var inputTimeValue = inputTime.value; // Get the user's input time here

        // Update the graph's data
        var customData = generateHalvedValues(inputCoffeeValue, data.labels.length);
        dummyGraph.data.datasets[0].data = customData;

        // Call the function to update the labels based on the user input time
        updateLabels(inputTimeValue);

        // Update the chart
        dummyGraph.update();
    });
});