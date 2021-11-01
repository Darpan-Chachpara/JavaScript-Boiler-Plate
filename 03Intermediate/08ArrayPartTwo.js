 // first way
function isEven(element) {
    if(element % 2 === 0){
        return true;
    }
    return false;
}
console.log(isEven(2));

// second way
var isEven1 = (element) => {
    element % 2 === 0;  // if we do not write return then you will get undefined
    return element % 2 === 0;
}
console.log(isEven1(2));

//CallBack first way
var results = [2,3,6,8].every(isEven1);
console.log(results);

// CallBack second way with return
//CallBack is something which has no name eg:- () => {}
var results1 = [2,4,6,8,10].every((e) => {
    return e % 2 === 0;
});
console.log(results1);

// CallBack third way without return 
var results2 = [2,4,5,8,10].every((e) => (e % 2 === 0));
console.log(results2);

// if we are using {} then return is compulsary
// if we are using () then return is not compulsary