'use strict';

const denomination = [5, 10, 20, 50, 100, 200, 500, 1000];

const getDenomination = function(cash) {
    if (cash.toString().endsWith('5') && cash <= 1000) {
       cash = cash / 2;
    } else if (cash.toString().endsWith('0') && cash <= 1000) {
        cash = cash / 2;
    } else {
        console.log('This is not a valid denomination');
    }
    return cash;
}

console.log(getDenomination(1000));