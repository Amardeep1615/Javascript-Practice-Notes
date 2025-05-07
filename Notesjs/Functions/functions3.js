// Pocket Money & Expense Tracker App


function addIncome(incomeList, amount, source) {
    incomeList.push({ amount, source });
  }
  
  
  function addExpense(expenseList, amount, category) {
    expenseList.push({ amount, category });
  }
  
  
  function calculateBalance(incomeList, expenseList) {
    const totalIncome = incomeList.reduce((sum, income) => sum + income.amount, 0);
    const totalExpense = expenseList.reduce((sum, expense) => sum + expense.amount, 0);
    return totalIncome - totalExpense;
  }
  
  
  function getCategorySummary(expenseList) {
    let categorySummary = {};
    expenseList.forEach(expense => {
      if (categorySummary[expense.category]) {
        categorySummary[expense.category] += expense.amount;
      } else {
        categorySummary[expense.category] = expense.amount;
      }
    });
    return categorySummary;
  }
  
  
  let incomeList = [];
  let expenseList = [];
  
  addIncome(incomeList, 100, 'Allowance');
  addIncome(incomeList, 50, 'Part-time Job');
  addExpense(expenseList, 20, 'Food');
  addExpense(expenseList, 30, 'Entertainment');
  
  console.log("Current balance: ", calculateBalance(incomeList, expenseList));
  console.log("Category Summary: ", getCategorySummary(expenseList));
  