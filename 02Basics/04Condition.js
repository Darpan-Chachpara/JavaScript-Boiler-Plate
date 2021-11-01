var temperature;

temperature = 50;

if(temperature < 20){
    console.log("It is very Cold");
}

if(temperature < 40){
    console.log("It is Moderate Cold");
}else {
    console.log("It is very HOT");
}


var whoIsHere = '';
if(whoIsHere === 'user'){
    console.log("Greeting message for user");
    console.log("Allow access to view all courses");
}else if(whoIsHere === 'teacher'){
    console.log("Greeting message for Teacher");
    console.log("Allow access to his courses");
}else {
    console.log("Message: please verify your Email");
    console.log("Please REGISTER if not yet registered");
}


// if let is written and we are changing value in {} then we can not see outside the {}
// but if we are writting var then we can use that object outside the scope
//if we are using let and changing value it will refelect to the whole program