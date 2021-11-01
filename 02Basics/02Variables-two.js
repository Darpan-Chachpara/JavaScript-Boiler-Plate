const uid = "abc123"; // const we can not change value for uid

var fullName = "Darpan Chachpara";
var email = "darpan@gmail.com";
var password = "123456";
var confirmPassword = "123456";
var courseount = 0;
var isLoggedInFromGoogle = false;

// to take input from user have to connect it to html
// fullname = promt("Enter your name: ");
// alert etc

console.log(uid);
console.log("Full Name is: ", fullName); // first way
console.log("Full Name is: " + fullName);// second way
console.log(email);

// Best to see the changes 
console.log(`
    With Unique ID : ${uid}
    User is : ${fullName}
    and his email is : ${email}
    and uses the password : ${password}
`);