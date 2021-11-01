// import User from "./06Classes"; // One way
const User = require("./06Classes.js"); // Second Way

const darpan = new User("DARPAN", "dc126@gmail.com"); // as we are using constructor we are passing inside()

console.log(darpan.getInfo());
console.log(darpan.getInfo().email);

darpan.enrollCourse("Yes 1 done");
darpan.enrollCourse("Yes 2 done");
console.log(darpan.getCourseList());

let courses = darpan.getCourseList();
courses.forEach((c) => console.log(c));
console.log(courses.length);