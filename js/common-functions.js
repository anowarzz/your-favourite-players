//  --------------  Functions For Expense Calculation Section ---------------//


// 1. To get value from input field  ---------->
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldAmount = parseFloat(inputFieldValueString);
  return inputFieldAmount;
}



// 2. To get value from Text element ------->
function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.value;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

// 3. --------- To set new value in text element --------- //

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}




// 4.  ------- Calculating all player expense together ---------- //

function playerTotalExpense() {
  // per player expense from input  field ------ >
  const perPlayerExpense = getInputFieldValueById("per-player-expense-field");

  // Total player number from OL ----- >
  const selectedPlayers = document.getElementById("selected-players");
  const totalSelectedPlayers = selectedPlayers.children;
  const allSelectedPlayers  = totalSelectedPlayers.length;
  // player expense calculation ------->
  const totalPlayerExpense = perPlayerExpense * allSelectedPlayers;
  return totalPlayerExpense;
}
