
// Scope -- > {}

console.log(name);
var name = "Darpan"; // will give undefined

// console.log(kids);
// let kids = "Darpan"; //will give error Cannot access 'name' before initialization 


if(true){
    var lastName = "Chachpara";
    // let lastName = "Chachpara"; // if used let then will give error lastName is not defined
}
console.log(lastName);

//var we can access it from anywhere
//let we can access it inside the scope only