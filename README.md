# farm-expense-tracker

A simple web application for recording and managing farm expenses.

This project was built as a JavaScript practice project with an agriculture-focused use case.

Features

- Add a farm expense
- Enter an expense item
- Select an expense category
- Enter the expense amount
- Display all recorded expenses
- Filter expenses by category
- Calculate total expenses
- Delete an expense
- Save expenses using localStorage
- Retrieve saved expenses when the page is reloaded

Expense Categories

The application currently includes:

- Input
- Labour
- Transport

Technologies Used

- HTML
- CSS
- JavaScript
- Web Storage API, localStorage

JavaScript Concepts Practiced

This project helped me practice:

- DOM manipulation
- Event listeners
- Functions
- Arrays
- Objects
- Array methods including "filter()", "findIndex()", "reduce()", "push()", and "splice()"
- Creating and adding elements to the DOM
- Input handling and validation
- JSON
- localStorage

How It Works

Users enter an expense item, select a category, and enter the amount.

When the user adds an expense, the application:

1. Creates an expense object.
2. Adds the object to the expenses array.
3. Saves the updated array to localStorage.
4. Updates the expense list and total on the page.

The application retrieves saved expenses from localStorage when the page loads.

Users can also filter expenses by category and delete individual expense records.

Project Structure

```
farm-expense-tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

Future Improvements

Possible future versions may include:

- Additional expense categories
- Editing existing expenses
- Adding expense dates
- Sorting expenses
- Monthly expense summaries
- Data export
- Language translation

Version

Version 1.0
https://lejora-farm-expense-tracker.netlify.app

Author

Lilian Obasi

Frontend Developer in Training | Building agriculture-focused web projects
