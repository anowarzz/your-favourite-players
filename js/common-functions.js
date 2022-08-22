// 1. To get value from input field .

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldValueString);
    return inputFieldAmount;
    inputField.value = "";
  }
  
  // 2. To get value from Text element.
  
  function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.value;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
  }
  
  // 2. To set new value in text element .
  
  function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
  }
  