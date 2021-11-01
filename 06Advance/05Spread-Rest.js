var returnValue = Math.max(2,5,6,7,8,9);
console.log(returnValue);

var myObj = {};

Object.assign(myObj, { a:1, b:2, c:3 }, { z:9, y:8, x:7 });
console.log(myObj);


function sumOne(a,b) {
    return a+b;
}
console.log(sumOne(10,20));
console.log(sumOne(5, 4, 2)); // will take first two parameter only
var myA = [5,4];
console.log(sumOne(myA));// will print as it is, because in parameter we are passing 2 argument so will take 2 only but we are passing one in current line

console.log(sumOne(...myA));// ... will take the arguments as many it comes
// ... is a spreed operator


//Taking Addition OF all
function sumTwo(...args){
    console.log(args);
    let sum = 0;
    for(const arg of args){
        sum +=arg;
    }
    return sum;
}
console.log(sumTwo(2,3,9)); // can take as much parameter as you want


//Taking Multiplication of first two and add remaining
function sumThree(a, b, ...args){
    console.log(args);
    let multi = a*b;
    let sum = 0;
    for(const arg of args){
        sum +=arg;
    }
    return [multi, sum];
}
console.log(sumThree(2,3,1,1,1));