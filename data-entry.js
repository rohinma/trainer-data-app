document.getElementById('dataEntryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const trainerID = localStorage.getItem('trainerID');
    const beneficiaryName = localStorage.getItem('selectedBeneficiary');
    const age = document.getElementById('age').value;
    const children = document.getElementById('children').value;
    const goats = document.getElementById('goats').value;

    // Submit the data to Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbw3eYaposPCmE_GyeKZ8nvsUZINCrGEgeVW7LTDDc0/exec', {
        method: 'POST',
        body: JSON.stringify({
            trainerID,
            beneficiaryName,
            age,
            children,
            goats
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(result => {
        alert('Data submitted successfully!');
        window.location.href = 'index.html';
    })
    .catch(error => console.error('Error submitting data:', error));
});
