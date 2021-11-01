// SetTimeout( function, milliseconds )
// setInterval( function, milliseconds )

var counter = document.querySelector(".counter"); // . for class and # for id
var followers = document.querySelector(".followers");

// var counter = document.getElementsByTagName("counter");
// var followers = document.getElementsByTagName("followers");

let count = 1;

setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerHTML = count;
    }
}, 1); // speed of the increment till 1000

setTimeout(() => {
    followers.innerText = "Followers in Instagram";
}, 4500);