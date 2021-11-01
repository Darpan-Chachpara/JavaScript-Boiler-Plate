// alert("Error");
function myvalidation(){
    let myValue = document.getElementById('myform').value; // can also use querySelector
    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log("Not a Valid input")
    } else {
        console.log("Valid Input")
    }
}


//Form Validation
document.querySelector('.myform1').addEventListener('submit', (event) => {
    event.preventDefault(); // will not take value in URL
    console.log(event.target.username.value); // value as we dont want value of that
    console.log(event.target.password.value);
    event.target.username.value = ""; // to refresh the input field
    event.target.password.value = ""; // to refresh the input field

})