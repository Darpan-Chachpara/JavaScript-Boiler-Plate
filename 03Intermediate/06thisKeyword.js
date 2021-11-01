console.log(this); // empty{} if we write on browser then it will give window

var game = "Basketball";

function sayName() {
    var name = " Hi Darpan";
    console.log(this); // will say global text but not will give answer
}
sayName();

var user = {
    firstName: "Darpan",
    courseCount: 126,
    getCourseCount : function () {
        console.log("Line 15", this); // will get data but with function
        function sayHello(){
            console.log("HELLO"); // will print Hello
            console.log("Line no 18 : ", this); // will say global text but not will give answer
        }
        sayHello();
    },
};

// This is not regular function call/count
user.getCourseCount(); 

//Regular Function call/count
function sayHello() {
    console.log("Hello"); // will print Hello
}
sayHello();



let myDar = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeetings: function (meetings){
        this.meetings = this.meetings + meetings
        // return this.meetings or meetings you will get 0
    },

    summary: function(){
        return `You have ${this.meetings} meetings today`
    }
}

myDar.addMeetings(4)
console.log(myDar.summary())