// User is only allowed to make a purchase when he is :
//logged in
//email verified
// cardInfo - valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var carInfo = true;

// if(isLoggedIn){
//     console.log("Logged IN Success");
//     if(isEmailVerified){
//         console.log("Email is Verified");
//         if(carInfo){
//             console.log("You can make a purchase");
//         }
//     }
// }

// && everything must be true then only output will be true
// || atleast one thing can be true then output will be true
if (isLoggedIn && isEmailVerified && carInfo){
    console.log("Allow user to make a purchase");
}else {
    console.log("You are NOT allowed to do that");
};




let isVerified = false;
let isLoggedInn = true;
let hasPaymentToken = true;
let isGuest = true;
//! will change (false to true or tur to false) so below code will execute
if(!isVerified && isLoggedInn && hasPaymentToken){
    console.log("You can access the paid course");
} else if (isVerified || isGuest){
    console.log("Allow free access");
}else {
    console.log("Please contact Admin");
}