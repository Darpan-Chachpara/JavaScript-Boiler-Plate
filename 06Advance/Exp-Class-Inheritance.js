
class User {
    constructor(firstname, lastname, credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName() {
        return `${this.firstname} ${this.lastname} is my full name!`;
    }
    // as we are updating no need to return
    editName(newname){
        const myname =  newname.split(" ");
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}

//Inheritance (Child/Parent)
class Teacher extends User{
    constructor(firstname, lastname, credit, subject){
        super(firstname, lastname, credit); // always first line should be super
        this.subject = subject;
    }
    //Method Over-ridding
    getFullName() {
        return `${this.firstname} ${this.lastname} is my full name and i teach ${this.subject}`;
    }

    //Method
    favDrink(namee){
        console.log(`My favourite drink is ${namee}`);
    }
    
}



// when used new keyword always constructure is called
// we don not pass parameter then to and we call teacher then we will get undefined
const darpan = new Teacher("Darpan", "Chachpara", 126, "DC_126_111"); // this will check in Teacher and if not present then it will check in User
//If each and very parameter is match in parent it will not check in user but if any of the parameter does not match then will check in user
console.log(darpan);

console.log(darpan.getFullName());

darpan.editName("Meet Chachpara");
console.log(darpan); // will give output in array

darpan.editName("Meet Chachpara");
console.log(darpan.getFullName()); // will give output in sentence

darpan.favDrink("ReadBull");

const meet = new User();
console.log(meet); // we will get undefined as not passing the parameter to argument in Constructur

