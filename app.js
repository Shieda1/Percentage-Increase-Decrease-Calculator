// https://calculator.swiftutors.com/percentage-increase-decrease-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const IncreaseDecreaseValueRadio = document.getElementById('IncreaseDecreaseValueRadio');
const valueRadio = document.getElementById('valueRadio');
const percentofIncreaseorDecreaseRadio = document.getElementById('percentofIncreaseorDecreaseRadio');

let IncreaseDecreaseValue;
let value = v1;
let percentofIncreaseorDecrease = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

IncreaseDecreaseValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Value';
  variable2.textContent = 'Percent of Increase or Decrease (%)';
  value = v1;
  percentofIncreaseorDecrease = v2;
  result.textContent = '';
});

valueRadio.addEventListener('click', function() {
  variable1.textContent = 'Increase/Decrease Value';
  variable2.textContent = 'Percent of Increase or Decrease (%)';
  IncreaseDecreaseValue = v1;
  percentofIncreaseorDecrease = v2;
  result.textContent = '';
});

percentofIncreaseorDecreaseRadio.addEventListener('click', function() {
  variable1.textContent = 'Increase/Decrease Value';
  variable2.textContent = 'Value';
  IncreaseDecreaseValue = v1;
  value = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(IncreaseDecreaseValueRadio.checked)
    result.textContent = `Increase/Decrease Value = ${computeIncreaseDecreaseValue().toFixed(2)}`;

  else if(valueRadio.checked)
    result.textContent = `Value = ${computeValue().toFixed(2)}`;

  else if(percentofIncreaseorDecreaseRadio.checked)
    result.textContent = `Percent of Increase or Decrease = ${computePercentofIncreaseorDecrease().toFixed(2)} %`;
})

// calculation

function computeIncreaseDecreaseValue() {
  return Number(value.value) + (Number(value.value) * (Number(percentofIncreaseorDecrease.value) / 100));
}

function computeValue() {
  return Number(IncreaseDecreaseValue.value) / (1 + (Number(percentofIncreaseorDecrease.value) / 100));
}

function computePercentofIncreaseorDecrease() {
  return ((Number(IncreaseDecreaseValue.value) - Number(value.value)) / Number(value.value)) * 100;
}