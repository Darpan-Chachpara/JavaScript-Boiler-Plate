//Method 1
const sayHello = function(name){
    return "Hey there, " + name + " !"
}
console.log(sayHello('Darpan'));

//Method 2
const sayHelloo = (name) => {
    return `Hey there, ${name} !`
}
console.log(sayHelloo('Meet'));

//Method 3
const sayHellooo = (name) => `Hey there, ${name} !`
console.log(sayHellooo('Vru'));



//NEVER USE ARROW ( => ) IN METHOD AND CONSTRUCTURE
// Arrow Example
const newArray = [{
    title: 'Buy Pencil', // index[0]
    isDone: true,
}, {
    title: 'Buy Chocolate', // index[1]
    isDone: true,
}, {
    title: 'Read Books', // index[2]
    isDone: false,
}]

//Method 1
const thingsDone = newArray.filter((check) => { // will check for condition and will print each one of them matching 
    return check.isDone === true
})
console.log(thingsDone)

//Method 1
const thingsDonee = newArray.filter((check) => check.isDone === false)
console.log(thingsDonee)


// Sometime (=>) must avoid arrow function

const camera = {
    price: 600,
    weight: 2000,
    myDes: function () {
        return `This canon camera is of ${this.price}$`
    },
    // myDess:  () => {
    //     return `This canon camera is of ${this.price}$`
    // } // can not use (=>) arrow function we will get undefined
    myDess() {
        return `This canon camera is of ${this.price}$`
    },
}
console.log(camera.myDes());
console.log(camera.myDess());


//This is only for Redux people
// const func = () => ({key: 'value'});
// console.log(func);