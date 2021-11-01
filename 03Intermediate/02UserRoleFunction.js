// Define a funtion that can answer the role of a user.
// A user can be on following roles:
// admin - with all access
// subadmin - with ccess to create/delete courses
// testprep - with access to create/delete tests
// user - consume all content
// other - trial super.

//Input : getUserRole(name, role)

                                                                        // Can also use this
function getUserRole(name, role){   // var getUserRole = function (name, role) {}    or    var getUserRole = (name, role) => {}
    
    switch (role) {
        case "admin": // case "string" or number
            return `${name} is admin with all access`;
            break; // this is not necessary as after return nothing will execute
        case "subadmin":
            return `${name} is sub-admin with access to create and delete course`;
            break;
        case "testprep":
            return `${name} is testprep with access to create and delete course`;
            break;
        case "user":
            return `${name} is a user to consume content`;
            break;
        default:
            return `${name} is a trial user`;
            break;
    }
}

getUserRole("Darpan", "user"); // to get data on html
console.log(getUserRole("Darpan", "user")); // to get data on console

var getrole = getUserRole("Sammyu", "testprep");
console.log(getrole);
