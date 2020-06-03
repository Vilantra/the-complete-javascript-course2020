/*
John and his family went to a holiday and went to 3 diffetrent restaurant. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20%
of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays: 
1. Containing all three tips (one for each bill)
2. Containing all three final paid amounts (bill + tip).

Note: To calculate 20% of value, simple multiply if with 20/100 = 0.2)

*/

var bill = [124, 48, 268];

function calculate(bill) {
    var percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * bill;
}

var tip = [];
var totalValues = [];
for (let i = 0; i < bill.length; i++) {
    tip.push(calculate(bill[i]));
    totalValues.push(bill[i] + tip[i]);
}

console.log(tip);
console.log(totalValues);