const courses = [
    {
        name : "Complete Ultimate Course",
        price : "3.0",
    },
    {
        name : "Complete Darpan Course",
        price : "2.3",
    },
    {
        name : "Complete Bhargav Course",
        price : "2.9",
    },
    {
        name : "Complete Meet Course",
        price : "2.6",
    },
];

//We are performing below html query (20 - 25) from line 27 in javScript
// {/* <ul class="list-group">
//     <li class="list-group-item">
//         Javascript course<span class="float-right">$2.1</span>
//     </li>
// </ul> */}

// We are using Method
function generateLIST() {
    const ul = document.querySelector(".list-group");
    // ul.innerHTML = ""; // this line will not allow repetation of the below query , remove this line and see the changes
    courses.forEach((course) => {

        const li = document.createElement("li"); //<li></li>
        li.classList.add("list-group-item"); //<li class="list-group-item"></li>
    
        const name = document.createTextNode(course.name); //<li class="list-group-item">Complete Darpan Course</li>
        li.appendChild(name); // will add [Complete Darpan Course] in above line as in above line we are just refering/injecting to span but in this line we are adding
    
        const span = document.createElement("span"); //<span></span>
        span.classList.add("float-right"); //<span class="float-right"></span>
        const price = document.createTextNode("$" + course.price); //<span class="float-right">$ 2.3</span>
        span.appendChild(price); // will add [$ 2.3] in above line as in above line we are just refering/injecting to span but in this line we are adding
    
        li.appendChild(span); //<li class="list-group-item">Complete Darpan Course <span class="float-right">$ 2.3</span></li>
        ul.appendChild(li); //<ul><li class="list-group-item">Complete Darpan Course <span class="float-right">$ 2.3</span></li></ul>
    });
}

generateLIST(); // First way
// window.addEventListener("load", generateLIST); // Second way

//Ascending Search
const buttonAsc = document.querySelector(".sort-btn");
// we are using Callback function
buttonAsc.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price );
    generateLIST();
});  // to see changes uncomment line 30 you will understand

//Descending Search
const buttonDsc = document.querySelector(".sort-btnn");
buttonDsc.addEventListener("click", () => {
    courses.sort( (a, b) => b.price - a.price );
    generateLIST();
});

// function darpan(){ }               -> Method function
// function darpan( () => { })        -> Callback function