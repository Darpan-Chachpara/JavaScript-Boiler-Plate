function sayHello(name) {
    console.log("Hello there, Darpan");
    console.log("Hello there, " + name);
    console.log(`Hello there, ${name}. How are you?`);
}

sayHello("DCCV"); // when we want to call a function
sayHello("Meet");
sayHello;   // when we want to refer to the function

function masti(){
    return " Helo India";
}

console.log(masti); // will not print as we are not storing return value
console.log(masti()); // () concept of calling and refering
var greetings = masti();
console.log(greetings);