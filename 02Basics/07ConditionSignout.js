// Show user a signout buyoon if he is authenticated,
// other wise show him option to Login/Signup

var authenticated = false;

// if(authenticated){
//     console.log("Show sihnout button");
// }else {
//     console.log("Show login button");
// }

//Terniary Operator
authenticated ? console.log("SignOut") : console.log("Login");