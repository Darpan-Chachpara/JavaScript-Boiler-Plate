var countries = ["India", "USA", "Japan", "Germany"]; // declaring Array (1st way)

var states = new Array("Gujarat", "Punjab", "Delhi", "Pune"); // declaring Array (2nd way)

console.log(states);
console.log(states[1]);
console.log(states.length);
states[0] = "Assam";
console.log(states);

var user = ['hitesh', "darpan@gmail.com", 3, 34, true]; // string,number,boolean
console.log(user);

user.pop(); // will delete data from last
console.log(user);

user.push("Welcome"); // will add data at last
console.log(user);

user.unshift("New Value"); // will add at starting
console.log(user);

// console.log(user.shift()); // to check what is going to delete
user.shift(); // will delete from starting
console.log(user);

console.log(user.indexOf(3)); // will give the index were 3 is present

console.log(user.indexOf("darpan")); // if value is not preset then it will give -1
// and if value is present then it will give index of that value

console.log(Array.from("DarpaN")); // will convert into array