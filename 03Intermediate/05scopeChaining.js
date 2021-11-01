// Scope is always wuth function eg:- function abc() {}
// But it is written with switch, if, loop (){} it is not a scope 

// GrandFather have icecream
var name = "Darpan";
console.log("Line no 3: ", name);

// Father can take it from Grandfather
function sayName() {
    console.log("Line no 6: ", name)
}
sayName();

// Father can take it from Grandfather or can have its own
function sayName0() {
    var name = "Mr X";
    console.log("Line no 9: ", name);
    // sayName1();
    sayName2();
    sayName3();

    // function sayName1(){ // Child can take it from Grandfather
    //     console.log("Line no 12: ", name);
    // } // if we comment line 16 we can see that child can take icecrea from Grandfather

    function sayName2(){ // Child can take it from Father
        console.log("Line no 15: ", name);
    }

    function sayName3(){ // Child can take it from Father/Grandfather or can have its own
        var name = "Its Yours";
        console.log("Line no 18: ", name);
    }
}
sayName0();


