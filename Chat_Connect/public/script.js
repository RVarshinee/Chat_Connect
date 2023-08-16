

document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('room');

    // Load the CSV file
    fetch('GeneralistRails_Project_MessageData.csv')
        .then(response => response.text())
        .then(data => {
            const options = parseCSV(data);
            populateSelect(selectElement, options);
        })
        .catch(error => {
            console.error('Error fetching CSV:', error);
        });
});

function parseCSV(csvData) {
    const rows = csvData.split('\n');
    const options = [];

    for (let i = 1; i < rows.length; i++) {
        const columns = rows[i].split(',');
        const userId = columns[0].trim();;
        const userMessage = columns[2].trim();;

        options.push({  userId,userMessage });
    }

    return options;
}

function populateSelect(selectElement, options) {
    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option.userId;
        optionElement.textContent = option.userId;
        selectElement.appendChild(optionElement);
    });
}


