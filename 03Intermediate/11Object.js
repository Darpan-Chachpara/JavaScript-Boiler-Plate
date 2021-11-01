var user = {
    firstName : "Darpan",
    lastName : "Chachpara",
    role : "Admin",
    logincount : 126,
    facebookSignedIn : true,
};

console.log(user);
console.log(user.firstName); // first way
console.log(user["lastName"]); // second way
// console.log(user[role]); // this will not worked see above line 11 for same example

console.log(user.logincount);
user.logincount = 150;
console.log(user.logincount);
console.table(user);