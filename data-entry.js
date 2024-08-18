document.addEventListener('DOMContentLoaded', function () {
    const selectedBeneficiary = localStorage.getItem('selectedBeneficiary');
    const trainerID = localStorage.getItem('trainerID');

    // Display the selected beneficiary
    document.getElementById('selectedBeneficiary').textContent = `Beneficiary: ${selectedBeneficiary}`;

    document.getElementById('dataEntryForm').addEventListener('submit', function (e) {
        e.preventDefault();

        // Get the form data
        const age = document.getElementById('age').value;
        const children = document.getElementById('children').value;
        const goats = document.getElementById('goats').value;

        // Prepare the data to be sent
        const postData = {
            data: {
                trainerID: trainerID,
                beneficiaryName: selectedBeneficiary,
                age: age,
                children: children,
                goats: goats
            }
        };

        // Send the data to the Google Sheet using the SheetDB API
        fetch('https://sheetdb.io/api/v1/96jn3s5pmeu0b', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data submitted successfully:', data);
            alert('Data submitted successfully!');
        })
        .catch(error => {
            console.error('Error submitting data:', error);
            alert('There was an error submitting the data.');
        });
    });
});
