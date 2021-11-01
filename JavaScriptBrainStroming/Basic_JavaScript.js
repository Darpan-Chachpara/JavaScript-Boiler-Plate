
let name = 'Darpan';
console.log(name);

//Cannot be a reserved keyword
//Should be meaningful name
//Cannot start with a number (1name)
//Are case-sensitive

let rate = 0.3;
rate = 126;
console.log(rate);
// let is used to declare variable, due to let value can change anytime/anywere

// const rate = 0.3;
// rate = 1;
// console.log(rate);
// const is used to declare variable, due to const value cannot change anytime/anywere

//Primitives/Value Type
let namee = 'Darpan'; //String Literal
let age = 24; //Number Literal
let isApproved = true; // Boolean Literal (true/false)
let firstName; // Undefined Literal
let firstname = undefined; //Undefined Literal
let lastname = null; //Null Literal //to clear value of variable

//Reference Type:-
//Object- which has key value pair, key is property of person(object)
let person = {
    nameee: 'Darpan',
    agee: 25
};
console.log(person);
//Dot Notation
person.nameee = 'Meet';
console.log(person.nameee);
//Braket Notation
person['nameee'] = 'DC126111';
console.log(person['nameee']);
// console.log(person.name);


//Reference Type:-
//Array - start with index[0], length and object is dynamic can change anytime/anywere
let selectedColors = ['red' , 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors.length);// after object when we put (.) we can use many properties so explore that part


//Reference Type:-
//Function - set of operation performed and can have multiple parameter

//Performing a task
function greet(nameeee, ageee) { //nameee is parameter of function
    console.log('Helo ' + nameeee + ' you are '+ ageee + ' now');
}
greet('DCCDV', 25); //DCCDV is argument function
greet('MCCM'); //default value is {undefined} [always]

//Calculate a value
function square(number) { //nameee is parameter of function
    return number * number;
}
square(5); // will not show output as have to catch return value
let xyz = square(5); // storing value in new object and then passing
console.log(xyz); //First way
console.log(square(10)); // Second way



//Example
function MyNumberType(n) {
    this.number = n;
  }  
MyNumberType.prototype.valueOf = function() {
    return this.number;
};
  
const object1 = new MyNumberType(4);
console.log(object1 + 3);
  // expected output: 7