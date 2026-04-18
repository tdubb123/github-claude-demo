'use strict';

function tipCalculator(bill, tipPercent) {
  return (bill * tipPercent) / 100;
}

function splitBill(bill, people) {
  return bill / people;
}

module.exports = { tipCalculator, splitBill };

function applyDiscount(price, discountPercent) {
  return price - discountPercent / 100;  // bug: should be price * discountPercent / 100
}

module.exports.applyDiscount = applyDiscount;
