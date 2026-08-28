const itemInput = document.querySelector("#itemInput");
const categoryInput = document.querySelector("#categoryInput");
const amountInput = document.querySelector("#amountInput");
const addExpenseBtn = document.querySelector("#addExpenseBtn");
const expenseList = document.querySelector("#expenseList");
const totalExpense = document.querySelector("#totalExpense");
const filterCategory = document.querySelector("#filterCategory");

const expenses = JSON.parse(
  localStorage.getItem("expenses")
) || [];

function displayExpenses(expensesToDisplay) {
  expenseList.innerHTML = "";

  for (let i = 0; i < expensesToDisplay.length; i++) {
   
    const expense = expensesToDisplay[i];
 
  const paragraph = document.createElement("p");

  paragraph.textContent = `${expense.item}  - ${expense.category} : ₦${expense.amount}`;
  
  const deleteBtn = document.createElement("button");
  
  deleteBtn.classList.add("delete-btn");
  
  deleteBtn.textContent = "Delete";
  
  deleteBtn.addEventListener("click", function () {
   const expenseIndex = expenses.findIndex(
  item => item === expense
);
  expenses.splice(expenseIndex, 1);
    localStorage.setItem(
  "expenses",
  JSON.stringify(expenses)
);
  
  updateExpenseDisplay()
});

  paragraph.appendChild(deleteBtn);
  
  expenseList.appendChild(paragraph);
}
}

addExpenseBtn.addEventListener("click", function () {
  const item = itemInput.value.trim();
  const category = categoryInput.value;
  const amount = Number(amountInput.value);

  if (item === "" || amount <= 0) {
  return;
  }

  const expense = {
  item,
  category,
  amount
};

  expenses.push(expense);
  
  localStorage.setItem("expenses", JSON.stringify(expenses));

  itemInput.value = "";
  amountInput.value = "";
  
  updateExpenseDisplay();
});


filterCategory.addEventListener("change", function () {
  updateExpenseDisplay();
});

function updateExpenseDisplay() {
  const selectedCategory = filterCategory.value;

  let expensesToDisplay;
  let total;

  if (selectedCategory === "All") {
    expensesToDisplay = expenses;
    total = expenses.reduce((total, expense) => total + expense.amount, 0);

  } else {
    expensesToDisplay = expenses.filter(
      expense => expense.category === selectedCategory
    );
    total = expensesToDisplay.reduce((total, expense) => total + expense.amount, 0);
  }
  totalExpense.textContent = total;

  displayExpenses(expensesToDisplay);
}
updateExpenseDisplay();

