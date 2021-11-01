
//For Loop
for (let i = 0; i<=10; i++){
    console.log(i);
}

const myStates = [
    "Maharashtra",
    "Gujarat",
    "Punjab",
    1998,
    "Delhi",
    "Tamil Nadu",
];

for(let j=0; j<myStates.length; j++){ // j<=myStates.length (=) sign then we will get undefined because in array if no value is there it will give undefined
    // console.log(myStates[j]); // will print whole myStates
    if(typeof myStates[j] !== "string") continue; // if index not equal to string then will not show in output
    // if(typeof myStates[j] === "string") continue; // this will that if there is no string then it will be thrown in output
    // if(typeof myStates[j] !== "string") break; // this will stop the array when it will see that it is not string
    console.log(myStates[j]);
}

//While Loop
const myStates1 = [
    "Maharashtra",
    "Gujarat",
    "Punjab",
    1998,
    "Delhi",
    "Tamil Nadu",
];

let j = 0;
while(j < myStates1.length){
    console.log(myStates1[j]);
    j++;
}


//Do While Loop; will execute once even if condition is false
let k = 0;
do{
    console.log(myStates1[k]);
    k++;
} while(k < myStates1.length);
