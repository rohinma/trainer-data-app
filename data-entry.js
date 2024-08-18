document.getElementById('dataEntryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const selectedBeneficiary = localStorage.getItem('selectedBeneficiary');
    const age = document.getElementById('age').value;
    const children = document.getElementById('children').value;
    const goats = document.getElementById('goats').value;

    const data = {
        beneficiaryName: selectedBeneficiary,
        age: age,
        children: children,
        goats: goats
    };

    // Assuming you have the correct API endpoint for submission
    fetch('https://sheetdb.io/api/v1/r0qzgwj2qmk4v', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Data submitted successfully:', result);

        // Redirect to the dropdown page after successful submission
        window.location.href = 'dropdown-page.html';
    })
    .catch(error => console.error('Error submitting data:', error));
});
