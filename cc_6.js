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
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthlyCost;

    if (plan === "Basic") {
       monthlyCost = 10;  
    }
    else if (plan === "Premium") {
        monthlyCost = 20;
    }
    else if (plan === "Enterprise") {
        monthlyCost = 50;
    }
    let total = (monthlyCost * months) - discount; // Calculate total cost
    return total;
}//funtion to determine monthly cost

console.log (`Total Cost: $${calculateSubscriptionCost("Basic", 6, 10)}`);//Total Cost: $50
console.log (`Total Cost: $${calculateSubscriptionCost("Premium", 12, 0)}`);//Total Cost: $240

//Task 5: Returning Values
function convertCurrency(amount, exchangeRate) {
    let convertValue = (amount * exchangeRate).toFixed(2);
    return convertValue;
};// function to determine converting currency
console.log(`Convert Amount: $${convertCurrency(100, 1.1)}`)//converted amount $110
console.log(`Convert Amount: $${convertCurrency(250, 0.85)}`)//converted amount $212.50

//Task 6: Higher-Order Functions
let orders = [200, 600, 1200, 450, 800];
function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
};//function to determine bulk discount
let discountFunction = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
console.log (discountFunction) //Output: 200, 540, 1080, 450, 720

//Task 7 Closures
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense
        return totalExpenses
    };
};//function to add expenses and keep running total
let tracker = createExpenseTracker();
console.log(tracker(200));//output $200
console.log(tracker(150));//output $150

//Task 8: Recursion in JavaScript
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        return "Years to Level 10: 0";
    }
   else return `Years to Level 10: ${(10 - employeeLevel) * 2}`;//2 years
};// funtion to determine how many years to get a promotion
console.log(calculateYearsToPromotion(7));
console.log(calculateYearsToPromotion(5))