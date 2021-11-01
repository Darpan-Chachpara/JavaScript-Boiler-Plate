let user = function( name = "unname", courseCount = 0){ // if no value comes then it will take default value as noted
    return 'Hello ' + name + ' and your course count id: ' + courseCount
}

console.log(user()); // will take default value
console.log(user('Meet',));
console.log(user(undefined, 9));
console.log("Darpan", 8);