document.addEventListener('DOMContentLoaded', function () {
    const trainerID = localStorage.getItem('trainerID');
    const beneficiariesList = document.getElementById('beneficiaries');
    const proceedButton = document.getElementById('proceedButton');

    if (!trainerID) {
        console.error('Trainer ID not found in localStorage.');
        return;
    }

    fetch(`https://sheetdb.io/api/v1/ca81e2i10llig/search?trainerID=${trainerID}`)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data) && data.length > 0) {
                data.forEach(beneficiary => {
                    const listItem = document.createElement('li');
                    listItem.textContent = beneficiary.beneficiaryName;
                    beneficiariesList.appendChild(listItem);
                });
            } else {
                beneficiariesList.innerHTML = '<li>No beneficiaries found.</li>';
            }
        })
        .catch(error => console.error('Error fetching beneficiaries:', error));

    proceedButton.addEventListener('click', function () {
        window.location.href = 'data-entry.html';
    });
});
