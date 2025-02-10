//Task 1: Function Declaration
function calculateProft(costPrice, sellingPrice, UnitsSold) {
    let profit = (sellingPrice - costPrice) * UnitsSold;
    return profit;
} //function to determine the profits

console.log (`Total Profits: $${calculateProft(20, 30, 100)}`)//Profit $1000
console.log (`Total Profits: $${calculateProft(50, 70, 200)}`)//Profit $4000

//Task 2: Function Expression