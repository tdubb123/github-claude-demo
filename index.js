'use strict';

function tipCalculator(bill, tipPercent) {
  return (bill * tipPercent) / 100;
}

function splitBill(bill, people) {
  return bill / people;
}

function applyDiscount(price, discountPercent) {
  return price - (price * discountPercent / 100);
}

module.exports = { tipCalculator, splitBill, applyDiscount };
