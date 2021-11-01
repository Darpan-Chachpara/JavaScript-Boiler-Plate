let numOne = 22
let numTwo = 7

result = 25/7

console.log(result);
console.log(result.toFixed(2)); // will give only (2)number after decimal o
console.log(Math.floor(result)); // Will only given number before decimal only
console.log(Math.ceil(result)); // Will increment number before decimal with +1

console.log(Math.random()); //will alwayes give  number between 0 to 0.999..
console.log(Math.random() * 5); // will give ramdom number between 0 to 4.999...
console.log(Math.random() * 5 +1); // will give ramdom number between 0 to 4.999... but will also include till 5.99..


//Dice Example
let upper = 6
let lower = 1                                         // +1 to include one number plus
let myRandom = Math.floor(Math.random() * (upper - lower +1)) + lower // we will get maximum 5 and as we are adding lower so maximum value which we get will be 6

console.log(myRandom);