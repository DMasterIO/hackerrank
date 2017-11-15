// https://www.hackerrank.com/challenges/30-operators/problem

// Write your code here
const tip = mealCost * (tipPercent/100)
const tax = mealCost * (taxPercent/100)
const totalCost = Math.round(mealCost + tip + tax)
// Use console.log() to print to stdout
console.log(`The total meal cost is ${totalCost} dollars.`)