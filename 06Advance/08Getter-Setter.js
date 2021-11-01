class User {
    // if you are not writing constructor it will take default
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = []; // # means it is made private
    //function getInfo (){} is same as getInfo(){}
    getInfo(){
        return { name : this.name, email : this.email};
    }
    enrollCourse(cname) {
        this.#courseList.push(cname);
    } // setter
    getCourseList(){
        return this.#courseList;
    } // getter
}


const rock = new User("rock", "rock@gmail.com");
console.log(rock.getInfo());
rock.enrollCourse("Welcome Courses");
console.log(rock.getCourseList());
console.log(rock.courseList); // as we have made [# private] we will get undefined