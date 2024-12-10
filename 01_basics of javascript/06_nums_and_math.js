const score = 1000
console.log( score );
console.log(typeof score );

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 127235.35572
console.log (otherNumber . toPrecision(4));

const hundreds = 1000000000
console.log( hundreds.toLocaleString('en-In') );
console.log (typeof ('en-In'));

// Maths ......


console.log(Math);
console.log(Math.abs(-4));
/*Returns the absolute value of a number (the value without regard to whether it is positive or negative)
 For example, the absolute value of -5 is the same as the absolute value of 5*/
 
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)