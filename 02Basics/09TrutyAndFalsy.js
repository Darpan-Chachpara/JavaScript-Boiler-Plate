//Falsy Value
// undefined
// null
// 0
// ""
// Nan

var user = "";

if(user) {
    console.log("Condition is true");
}

//Turty Value
var users = "null";

if(users) {
    console.log("Condition is true");
}

console.log( 2 + 2 );
console.log( "2" + 2 );
console.log( 2 + "2" );
console.log( "2" + "2" );

// concept of == and ===
// Checking for == (Equality)
var userr = "2";

// checking number with string
if(2 == userr){ // just want to check if it is true or not Eg:- 2=="2"
    console.log("True");
}

// Checking for === (Edentity)
//will check for Exact same things is coming or not (checking memoory of 2 object is same or not)
//checking number with string
if(2 === userr){ // want to check if it is true or not  with datatype Eg:- 2===2 or "2"==="2"
    console.log("True");
}else {
    console.log("False");
}

//comparing object, we will get false
let i = {}
let j = {}
console.log( i === j ) // false

//Be careful
let k = {}
let l = k
console.log( k === l ) // true