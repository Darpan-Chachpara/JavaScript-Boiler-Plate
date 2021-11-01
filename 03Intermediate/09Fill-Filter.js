var testArray = [0,1,2,3,4,5,6,7,8,9];

console.log(testArray.fill("d")); //will replace all the index with d

var testArray1 = [0,1,2,3,4,5,6,7,8,9];
console.log(testArray1.fill("v", 3)) // will include 3

var testArray2 = [0,1,2,3,4,5,6,7,8,9];
console.log(testArray2.fill("m", 4, 7)) // will include 4 but exclude 7( 4 ko lega but 7 ko nahi )

const myNumber = [22,33,44,55,66,77,88,99];
const result = myNumber.filter((num) => ( num === 55));
console.log(result);