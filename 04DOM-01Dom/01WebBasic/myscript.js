// console.log(document); // we will get Whole Document 
// console.log(document.head); // we will get on head part
// console.log(document.URL); // we will get url
// alert('File is attached') // alert popup on every refresh

// console.log(document.getElementById('idone')); // have to pass id in string
// console.log(document.getElementsByClassName('idone')); // have to pass class in string

// const myElement = document.querySelector('p')
// console.log(myElement) // we will get only first one which comes

// const myElement1 = document.querySelectorAll('p') // class [.], id [#]
// console.log(myElement1) // we will get all (we will get in array)

// const myElement2 = document.querySelectorAll('p')
// console.log(myElement2[2]) // by index number

// If you want required structure jquery or somekind of stuff implement in head tag                      -- writing script in head
// If you want custom code that will dependent on what is existing on the web page then used at bottom    -- writing script in bottom


// const myPElements = document.querySelector('p')
// myPElements.textContent = "MY NAME IS DARPAN" // to change the value of any tag

//Using Loop
const myPElements1 = document.querySelectorAll('p')
myPElements1.forEach(function(p){
    p.textContent = "I am Changed using LOOP in JS"
}) // will change each and every p tag including id and call

// TO remove all p tag
// const myPElements2 = document.querySelectorAll('p')
// myPElements2.forEach(function(p){
//     p.remove()
// }) // to remove each and every p tag

//FACING issues in Arrow Function
// const myPElements3 = document.querySelectorAll('p')
// var num = myPElement3.forEach((p) => (p.textContent = "I am Changed using LOOP in JS"));
// console.log(num)



//CREATING new <h5> using javascript
//First Way
const myNewPara = document.createElement('h5') // <h5></h5>
myNewPara.textContent = "I was added by Darpan" // <h5>I was added by Darpan</h5>


//Adding in Body
document.querySelector('body').appendChild(myNewPara) // <body><h5>I was added by Darpan<h5></body>
//IF you want convert same as that of line 28 then copy code from line 26 to line 29 and place it down and see the changes
//As script file execute from Top to Bottom

//CREATING new <h5> using javascript
//Second Way
const h = document.createElement('h4') // <h4></h4>
var myValue = document.createTextNode('Hello Darpan Chachpara') // <h4></h4>Hello Darpan Chachpara
h.appendChild(myValue)
document.querySelector('h1').appendChild(h);

document.querySelector('button').addEventListener('click', () => {
    console.log("Button was pressed by Darpan")
});//Check in console

document.querySelector('button').addEventListener('click', (Event) => {
    event.target.textContent = "Button was pressed by Darpan"
}); // click on button will show changes on that button only


//Track Input Form
document.querySelector('#myform').addEventListener('input', (Event) => { // check with change
    console.log(event.target.value);
});