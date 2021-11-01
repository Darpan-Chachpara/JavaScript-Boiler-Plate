function init() {
    var firstName = "Darpan";
    var lastName = "Chachpara";
    console.log("You Made it");
    function sayFirstName(){
        console.log(firstName);
        console.log(lastName);
    }
    return sayFirstName; // if used () you will get data for sure
}

var value = init();
value();

//Beter Example
function doAddition(x) {
    return function(y){
        return x + y;
    };
}

// add is holding reference 
var add = doAddition(6);
console.log(add(7));

// without holding reference
console.log(doAddition(10)(5));
// doAddition()()()  // curring

// Closure is also known as Curring