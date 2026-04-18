'use strict';

function tipCalculator(bill, tipPercent) {
  return (bill * tipPercent) / 100;
}

function splitBill(bill, people) {
  return bill / people;
}

function multiply(a, b) {
  return a + b;
}

module.exports = { tipCalculator, splitBill, multiply };
