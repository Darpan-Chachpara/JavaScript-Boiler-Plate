
var user = ["Ted", "Tim", "Sam", "Sor", "Sod", "Ton"];

console.log(user.slice(1,4));
console.log(user.slice(1));
console.log(user.slice(user.length - 1)); // -1 means staring from back
console.log(user.slice(user.length - 4)); // wil count from last but display in ascending way


var users = ["Ted", "Tim", "Sam", "Sor", "Sod", "Ton"];
users.splice(1, 3, "HI"); // will replace th value for 1 till 3 (will include 1 and 3 aswell)
console.log(users);

var userss = ["Ted", "Tim", "Sam", "Sor", "Sod", "Ton"];
userss.splice(1, 3, "HI", "BYE");
console.log(userss);

