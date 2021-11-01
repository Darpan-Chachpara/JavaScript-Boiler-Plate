// Create an application with following roles;
// admin -get full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "testprep";

switch (user) {
    case "admin": // case "string" or number
        console.log("Get full access");
        break;
    case "subadmin":
        console.log("Gets access to create/delete courses");
        break;
    case "testprep":
        console.log("Gets access to create/delete tests");
        break;
    case "user":
        console.log("Gets access to consume content");
        break;
    default:
        console.log("No user Match, Trial User");
        break;
}