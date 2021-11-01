var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is:  ${this.courseCount}`);
    };
};

//Prototype, not calling in object , rather then call out and use
User.prototype.getFirstname = function(){
    console.log(`Your Firstname is : ${this.firstName}`);
}


// if we are not using new then it is a regular function call
var darpan = User("Darpan", 126);
console.log(darpan); // will give undefined

// new keyword is used to invoke constructure and creating a unique instance every single time
var darpan = new User("Darpan", 126);
console.log(darpan); // writing new will give data
darpan.getCourseCount();
darpan.getFirstname();

// using new keyword it is not a regular function call
var darpan = new User("Meet", 45);
console.log(darpan); // using new we will get everytime new user 
darpan.getCourseCount();
darpan.getFirstname();





// Object Chaining

// if(darpan.hasOwnProperty("firstName")){
//     darpan.getFirstname();
// } // this will work if [firstName] exist

//if [firstNamee] is there then will not call that function