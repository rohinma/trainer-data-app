document.addEventListener('DOMContentLoaded', function () {
    const trainerID = localStorage.getItem('trainerID');
    const beneficiaryDropdown = document.getElementById('beneficiary');

    // Fetch the beneficiaries associated with the trainerID from Google Sheets
    fetch(`https://sheetdb.io/api/v1/ca81e2i10llig/search?trainerID=${trainerID}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(beneficiary => {
                const option = document.createElement('option');
                option.value = beneficiary.beneficiaryName;
                option.textContent = beneficiary.beneficiaryName;
                beneficiaryDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching beneficiaries:', error));
});

document.getElementById('beneficiaryForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedBeneficiary = document.getElementById('beneficiary').value;
    localStorage.setItem('selectedBeneficiary', selectedBeneficiary);
    window.location.href = 'data-entry.html';
});
