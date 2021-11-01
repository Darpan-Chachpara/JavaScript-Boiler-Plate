var User = {
    name  : "",
    getUserName: function() {
        console.log(`User name is : ${this.name}`);
    },
};
// One Way
var darpan = Object.create(User);
console.log(darpan); // you will get empty{}
darpan.name = "DARPAN CHACHPARA";
darpan.getUserName();

// Second Way
var meet = Object.create(User, {
    name : { value: "MEET CHACHPARA"},
});
meet.getUserName();
