// data type in right hand side should be same on left hand side

const user = ["Darpan", 3, "Admin"];

// First Way
var role = user[2];
console.log(role);
// Second Way
var [name, courseCOunt, role] = user;
console.log(role);


const MyUser = {
    firstName: "Darpan",
    lastName: "Chachpara",
    roles: "admin"
};
// First Way
console.log(MyUser.lastName);
// Second Way
const { firstName, lastName, roles} = MyUser; // name and object sholud match exact if not then undefined error
console.log(lastName);