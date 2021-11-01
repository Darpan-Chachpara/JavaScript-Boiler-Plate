let userEmail = 'abc@gmail.com'
let password = '123565984'

let userChecker = function(myString){
    if((myString.includes("@gmail.com")) && (myString.length > 6)){
        return (` ${myString} is valid EMAIL `)
    }
    return (` ${myString} is Not a valid EMAIL , Email must include '@gmail.com' and must be 6 character long`)
}
console.log(userChecker(userEmail))


let passChecker = function(pass){
    if((pass.includes('123@')) && (pass.length > 8)){ // password must include the inserted part
        return (` ${pass} is valid PASSWORD `)
    }
    return (` ${pass} is Not a valid PASSWORD , Password must include '123' and must be 8 character long`)
}
console.log(passChecker(password))