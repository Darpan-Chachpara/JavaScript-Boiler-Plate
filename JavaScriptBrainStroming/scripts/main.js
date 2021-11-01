const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// function called querySelector() to grab a reference to your heading, and then store it in a variable called myHeading.
// textContent property (which represents the content of the heading)

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
// onclick handler property equal to an anonymous (i.e. nameless) function, which contains the code we want the click event to run.
let myHTML = document.querySelector('html');
myHTML.onclick = function() {
    alert('Ouch! You Did Great Work!');
};

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/HapiLifeCycle.jpeg') {
      myImage.setAttribute('src','images/FileStructure.PNG');
    } else {
      myImage.setAttribute('src','images/Capture.PNG');
    }
}

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Mozilla is cool, ' + myName;
//   }

