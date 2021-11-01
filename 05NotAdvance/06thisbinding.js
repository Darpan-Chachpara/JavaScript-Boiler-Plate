const darpan = {
    firstName : "Darpan",
    lastName : "Chachpara",
    role : "Admin",
    courseCount : 3,
    getinfo: function () {
        console.log(`
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studying ${this.courseCount} courses
            `);
    },
};

darpan.getinfo();

const dj = {
    firstName : "Meet",
    lastName : "Chachpara",
    role : "User",
    courseCount : 10
} // dj want to access property of getifno from darpan it can bee done by bind

darpan.getinfo.bind(dj); // this will give nothing follow below 2 way
darpan.getinfo.bind(dj)(); // First way
var djInfo = darpan.getinfo.bind(dj);
djInfo(); // Second way


// getInfo         -> reference that method
// getInfo()         -> calling that method

// bind gives reference so because of that we have use ()
// call gives calling so use directly

darpan.getinfo.call(dj);