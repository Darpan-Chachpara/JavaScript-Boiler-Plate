const student = {
    name: 'Darpan',
    age: 23,
    isActive: true
}

//Convert this object into a string to be stored in local storage

//Tow method:- [1] parse, [2]stringifty

//Converting json into string
const studentObjToString = Json.stringify(student)

console.log(typeof studentObjToString);
console.log(studentObjToString); //  we can not access the property of student as we are using stringify

// localStorage.setItem('student', studentObjToString);

//Converting string into json
const toJSONStudent = JSON.parse(studentObjToString);

console.log(typeof toJSONStudent);
console.log(toJSONStudent.age); // now we can access the property of student as we are using parse