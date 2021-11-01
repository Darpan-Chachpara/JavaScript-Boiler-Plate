
var user = {
    firstName : "Darpan",
    lastName : "Chachpara",
    role : "Admin",
    logincount : 126,
    facebookSignedIn : true,
    courseList : [],
    // method with object
    buyCourse : function (CourseName) {  // CourseName will come line 20,21
        this.courseList.push(CourseName);  // this nothhing but calling user
    },
    getCourseCount : function () { // inside () will come if you passing any parameter as we are taking value from user so this will come
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`; // if length is not written then you will get details of courseList
    },
    info : function (){
        return `${this.firstName} ${this.lastName} as ${this.role} who logged in ${this.logincount} times and have already logged in ${this.facebookSignedIn} for ${this.courseList.length} number of courses.`;
    }
};
// var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount()); // () is used to run the code and get output
user.buyCourse("React Script");
user.buyCourse("Angular Script");
console.log(user.getCourseCount());

console.log(user.info());