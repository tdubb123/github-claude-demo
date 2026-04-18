'use strict';

function tipCalculator(bill, tipPercent) {
  return (bill * tipPercent) / 100;
}

function splitBill(bill, people) {
  return bill / people;
}

function multiply(a, b) {
  return a * b;
}

function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function discount(price, percent) {
  return price - (price * percent / 100);
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

module.exports = { tipCalculator, splitBill, multiply, average, celsiusToFahrenheit, fahrenheitToCelsius, discount };
