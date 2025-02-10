//Task 1: Function Declaration
function calculateProft(costPrice, sellingPrice, UnitsSold) {
    let profit = (sellingPrice - costPrice) * UnitsSold;
    return profit;
}; //function to determine the profits

console.log (`Total Profits: $${calculateProft(20, 30, 100)}`);//Profit $1000
console.log (`Total Profits: $${calculateProft(50, 70, 200)}`);//Profit $4000

//Task 2: Function Expression
let calculateSalesTax = function(amount, taxRate) {
    let salesTax = Math.floor(amount * taxRate);
    return salesTax;
};//function to determine sales tax

console.log (`Sales Tax: $${calculateSalesTax(100, 0.07)}`)//Sales Tax $7
console.log (`Sales Tax: $${calculateSalesTax(500, 0.1)}`)//Sales Tax $50

//Task 3: 