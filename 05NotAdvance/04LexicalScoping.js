function init() {
    var firstName = "Darpan";
    var lastName = "Chachpara";
    function sayFirstName(){
        console.log(firstName);
        console.log(lastName);
    }
    sayFirstName();
}

init();
// console.log(sayFirstName); // will give error , because sayFirstName is only available in between(3 to 5)line