//export class User{}    -- Second Way
class User {
    // if you are not writing constructor it will take default
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    courseList = [];
    //function getInfo (){} is same as getInfo(){}
    getInfo(){
        return { name : this.name, email : this.email};
    }
    enrollCourse(cname) {
        this.courseList.push(cname);
    }
    getCourseList(){
        return this.courseList;
    }
}

//One Way
module.exports = User; // to access file from different location
