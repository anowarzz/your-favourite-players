







// Player Expennses Calculation.

// Adding event listener to the  calculate button.
document.getElementById("calculate-btn").addEventListener("click", function(){

    // setting All player expense to display
    setTextElementValueById("player-total-expense", playerTotalExpense())
})







// Total Expense calculation  ------>

//  Adding event listener to Calculate total button.
document.getElementById("calculate-total-btn")
  .addEventListener("click", function () {

    // Getting value from Manager Expense Field.
    const managerExpense = getInputFieldValueById("manager-expense-field");

    // Getting value from coach expense field.
    const coachExpense = getInputFieldValueById("coach-expense-field");


    // Total expense calculation.
    const totalExpense = playerTotalExpense() + managerExpense + coachExpense;

    // Setting Final total expense amount to display
    setTextElementValueById("all-total-expense", totalExpense);
  });
