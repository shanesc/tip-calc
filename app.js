// function updateTotal() {
//   const price = priceInput.value;
//   const tip = tipSlider.value;

//   const total = price * (1 + tip / 100);

//   totalOutput.innerHTML = `$ ${total.toFixed(2)}`;
//   updateTipPercentage();
//   updateTipOutput();
// };

// function updateTipPercentage() {
//   const tip = tipSlider.value;

//   tipPercentage.innerHTML = `${tip}%`;
// }

// function updateTipOutput() {
//   const price = priceInput.value;
//   const tipPercent = tipSlider.value;

//   const tip = price * (tipPercent / 100);

//   tipOutput.innerHTML = `$ ${tip.toFixed(2)}`;
// }

function updateAllNumbers() {
  // Inputs
  const priceInput = document.querySelector('#bill-price');
  const tipInput = document.querySelector('#tip-input');
  const splitInput = document.querySelector('#split-input');
  
  // Value Outputs
  const tipPercentageOutput = document.querySelector('#tip-percent');
  const tipAmountOutput = document.querySelector('#tip-amount');
  const totalOutput = document.querySelector('#total');
  const splitNumberOutput = document.querySelector('#split-number');
  const billEachOutput = document.querySelector('#bill-each');
  const tipEachOutput = document.querySelector('#tip-each');

  const billAmount = Number(priceInput.value);
  const tipPercentageAmount = Number(tipInput.value) / 100;
  const tipAmount = billAmount * tipPercentageAmount;
  const totalBill = billAmount + tipAmount;

  const billEach = totalBill / Number(splitInput.value);
  const tipEach = tipAmount / Number(splitInput.value);

  tipAmountOutput.innerHTML = `$ ${tipAmount.toFixed(2)}`;
  totalOutput.innerHTML = `$ ${totalBill.toFixed(2)}`;
  billEachOutput.innerHTML = `$ ${billEach.toFixed(2)}`;
  tipEachOutput.innerHTML = `$ ${tipEach.toFixed(2)}`;
  
  tipPercentageOutput.innerHTML = `${tipInput.value}%`;
  splitNumberOutput.innerHTML = splitInput.value > 1 ? `${splitInput.value} people` : `1 person`;
}

const allInputs = document.querySelectorAll('input');
allInputs.forEach(input => input.addEventListener('input', updateAllNumbers))

updateAllNumbers();