//Two type of context :- Global and executing right now
// Execution Context - Variable object, Scope chin, this
// Function declarations are scanned and made available
// Variable declarations are scanned and made undefined


//When you are calling function it can written in start or end

//One way
function tipper(a){
    var bill = a;
    console.log(bill + 5);
}
tipper(5);

//If want to convert string to int 
function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}
tipper("80");
tipper("five"); // NaN
tipper(50);
// tipper(five);


//When you using variable then it sholud call after the function only

// bigtipper(25); can not call function before variable

var bigtipper =  function (a){
    var bill = parseInt(a);
    console.log(bill + 5);
}
bigtipper(25);

console.log(name);  // undefinedd because because code knows it is defined somewhere, if we comment var then will give error
var name = "Darpan";

function sayName() {
    var name = "Mr . Darpan";
    console.log(name);
}
sayName();

console.log(name);