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

//Task 3: Arrow Function
let calculateBonus = (salary, performanceRating) => {
    let bonus;
    if (performanceRating === "Excellent") {
        bonus = salary * 0.2; //"Excellent" rating gets a 20% bonus
    }
    else if (performanceRating === "Good"){
        bonus = salary * 0.1; // "Good" rating gets a 10% bonus
    }
    else if (performanceRating === "Average") {
        bonus = salary * 0.05; //"Average" rating gets a 5% bonus
    }
    return bonus;
};// functioon for calculating bounses

console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`) //Bonus $1000
console.log(`Bonus: $${calculateBonus(7000, "Good")}`) //Bonus $700

//Task 4: Parameters and Arguments
