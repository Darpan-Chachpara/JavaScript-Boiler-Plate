// fetch() //100% will give you promise
// .then() // positive/success response
// .then() 
// .then()
// // flow is from top to bottom
// .catch() // we we are getting error

//One Way
// fetch("https://api.chucknorris.io/jokes/random")
// .then((response) => {
//     console.log("API : " ,response.json); // always json format
// })
// .catch();


// TRY THIS ON BORWSER THERE IT WILL WORK
fetch("https://api.chucknorris.io/jokes/random")
.then((response) => {
   return response.json(); // always json format
})
// in below then data will come from above then
.then((data) => {
    // console.log("Data is :",data);
    var joke = data.value;
    console.log("Joke : ", joke);
})
.catch();