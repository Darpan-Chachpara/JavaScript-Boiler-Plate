const darpan = "Darpan";
const meet = null; // falsy value 

if (darpan) {
    console.log("I execute - BLOCK 1");
}

if (!!meet) { // 100% boolean value
    console.log("I execute - BLOCK 2");
}