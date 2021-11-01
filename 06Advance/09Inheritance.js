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

    login(){ // for privacy use static login(){}
        return "You are logged in";
    }
}

//Inheritance
class SubAdmin extends User {
    //for name and email
    constructor(name , email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am SubAdmin";
    }
    //Overriding the method
    login(){
        return "You are Admin logged.";
        
    }
}

const tom = new SubAdmin("Darpan", "DC126111@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
