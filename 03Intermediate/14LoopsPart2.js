
//ForEach Loop
const myStates1 = [
    "Maharashtra",
    "Gujarat",
    "Punjab",
    1998,
    "Delhi",
    "Tamil Nadu",
];

// Below line of code will run and we will get in output 0,1,2,3
// var i = 0;
// for(;;){
//     if (i > 3)  break;
//     console.log(i);
//     i++;
// }

myStates1.forEach((s) => (console.log(s))); // first way
myStates1.forEach(s => console.log(s)); // second way
myStates1.forEach((s) => {
    return(console.log(s)); // third way
});