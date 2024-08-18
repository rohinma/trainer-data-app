# trainer-data-app
Sure! Here’s a `README.md` file you can use for your project:

---

# Trainer Data Collection Web App

This web application is designed to assist trainers in collecting and managing beneficiary data in various villages. The app enables trainers to log in, select beneficiaries, and enter data such as age, number of children, and number of goats. All data is stored in Google Sheets via an API.

## Features

- **Trainer Login**: Trainers can log in using their assigned ID.
- **Beneficiary Selection**: Trainers can select beneficiaries from a dynamically populated dropdown.
- **Data Entry**: Trainers can enter details about the beneficiaries, which are then submitted to a Google Sheet.
- **Data Storage**: Data is securely stored and managed in Google Sheets.
- **Redirection**: After data submission, the app redirects trainers to the beneficiary selection page for further data entry.

## Prerequisites

- A Google Sheet set up with two sheets:
  - `TDATA`: Used for storing beneficiary information.
  - `BENDATA`: Used for storing submitted beneficiary data.
- A free API service such as [SheetDB](https://sheetdb.io/) to interface with your Google Sheets.
- A GitHub account for hosting the web app on GitHub Pages.

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/rohinma/trainer-data-app.git
cd trainer-data-app
```

### 2. Google Sheets Setup

1. **Create a Google Sheet** with two sheets named `TDATA` and `BENDATA`.
2. Populate `TDATA` with the columns:
   - `trainerID`: The ID assigned to each trainer.
   - `beneficiaryName`: The names of the beneficiaries.
3. Leave `BENDATA` empty, as it will be populated by submitted data.

### 3. SheetDB Setup

1. **Create an account** on [SheetDB](https://sheetdb.io/).
2. **Link your Google Sheet** to SheetDB and generate an API key.
3. Note down your API key as you'll need it in the JavaScript files.

### 4. Update JavaScript Files

Replace the placeholder `YOUR_API_KEY` in the JavaScript files with your actual SheetDB API key.

### 5. Host the Web App on GitHub Pages

1. **Push your changes** to GitHub.
2. Go to your GitHub repository settings.
3. In the "GitHub Pages" section, select the branch and root folder to host.
4. After saving, you'll be provided with a URL to access your live web app.

### 6. How to Use the Web App

1. **Login**: Enter the trainer ID to log in.
2. **Select Beneficiary**: Choose a beneficiary from the dropdown list.
3. **Enter Data**: Input the required information for the selected beneficiary.
4. **Submit**: Submit the data, and you'll be redirected to the beneficiary selection page to repeat the process.

## File Structure

- `index.html`: The login page for trainers.
- `dropdown-page.html`: The page where trainers select beneficiaries.
- `data-entry.html`: The data entry form for entering beneficiary details.
- `beneficiaries.js`: JavaScript file for handling beneficiary selection and displaying the dropdown.
- `data-entry.js`: JavaScript file for submitting data to Google Sheets.
- `README.md`: This documentation file.

## Troubleshooting

- Ensure your API key is correctly inserted in the JavaScript files.
- Verify that your Google Sheet is correctly linked with SheetDB.
- If data is not showing up or not being submitted, check the browser console for errors.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or bug fixes.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

This `README.md` should provide clear instructions for setting up, using, and maintaining your web app. Feel free to customize it according to your specific project details!
