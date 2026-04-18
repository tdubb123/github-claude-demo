# github-claude-demo

The simplest possible demo of Claude Code + GitHub integration.

## How it works

Every time a pull request is opened or updated, GitHub Actions automatically runs Claude Code, which reviews the code and posts comments on the PR — no manual steps needed.

## Setup

1. Go to your repo → **Settings → Secrets → Actions**
2. Add a secret named `ANTHROPIC_API_KEY` with your Anthropic API key
3. Open a PR — Claude will review it automatically

## Functions

This repo includes a small JavaScript utility library in `index.js`:

| Function | Description |
|----------|-------------|
| `tipCalculator(bill, tipPercent)` | Calculates tip amount from a bill and tip percentage |
| `splitBill(bill, people)` | Splits a bill evenly among a number of people |
| `multiply(a, b)` | Multiplies two numbers |
| `average(numbers)` | Returns the average of an array of numbers |
| `celsiusToFahrenheit(celsius)` | Converts Celsius to Fahrenheit |
| `fahrenheitToCelsius(fahrenheit)` | Converts Fahrenheit to Celsius |
| `discount(price, percent)` | Applies a percentage discount to a price |
| `percentageOf(value, total)` | Returns what percentage `value` is of `total` |

## Try it

1. Create a new branch
2. Edit `index.js` (add a bug, or a new function)
3. Open a pull request
4. Watch Claude post a review within seconds
