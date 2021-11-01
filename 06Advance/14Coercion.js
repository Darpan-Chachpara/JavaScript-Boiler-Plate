// Normal way
console.log('5' - 5); // here we will get 0
console.log('5' + 5); // but here, it get added 55

//Always check type of operator
const giveType1 = typeof 5; // number
console.log(giveType1);
const giveType2 = typeof '5'; // string
console.log(giveType2);

//With Boolean value
const adder1 = false + 5; // false (0) --> 0+5 = 5
console.log(adder1);
const adder2 = true + 5; // true (1) --> 1+5 = 6
console.log(adder2);

// Login Check
const loginDetails = []
//data will come from DB
const loginID = loginDetails[0]
if(loginID !== undefined){ 
    // if only written loginID then also it will work this is the concept of Coercion
    // if we write if ('') then we will get Auth failed
    // if we write if (' ') then we will get Allow user to login
    // if we write if (loginDetails) then we will get Allow user to login
    // if we write if ([]) then we will get Allow user to login
    // if we write if ({}) then we will get Allow user to login

    console.log('Allow user to login');
} else {
    console.log('Auth Failed')
}

//Values that interpret as false:
// false
// 0
// '' // empty string is also false
// null
// undefined

//Values that interpret as true:
// true
// 1
// 'hi' // anything inside string is true
// []
// {}
