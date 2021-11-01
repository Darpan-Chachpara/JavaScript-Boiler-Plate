const newArray = [{
    title: 'Buy Pencil', // index[0]
    isDone: false,
}, {
    title: 'Buy Chocolate', // index[1]
    isDone: false,
}, {
    title: 'Read Books', // index[2]
    isDone: true,
}]

const check = newArray.findIndex(function (see, index){ // findIndex is same as forloop will check entill entire loop is completed
    console.log(see);
    return see.title === 'Read Books' // found at index[2] // if not presentthen it will give -1
})
console.log(check) // will give index were that object is found


//Method 1
const findArray = function(view, title){
    const nece = view.findIndex(function(search, index){
        return search.title.toLowerCase() === title.toLowerCase()
    })
    return view[nece]
}
let printMe = findArray(newArray, 'Buy chocolate')
console.log(printMe)


//Method 2
const findArrays = function(view, title){
    const titleReturned = view.findIndex(function(search, index){
        return search.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned // or write return on line 32 
}

let printMee = findArray(newArray, 'Buy Pencil')
console.log(printMee)