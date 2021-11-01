
// [] ==> Array --> index[]
// {} ==> Object --> {key,value} pair
// if using salary: function(){} --> to check in output use [document.write(salary) --> to check output in html page]
// and to call property use this.

// Iterable:- Array, String, Typed array, nodelist, Map, Set, Argument you send inside object
// Array object :- which are iterable --> foreach(), filter(), map(), reduce()
// for(let prop of arr) for nodelist

//Object.keys(obj)
//Object.values(obj)
//Object.entries(obj)

let western = {
    food: 'PavBhaji',
    name: 'Darpan',
    last: 'Chachpara',
    destination: 'US',
    margin: 'Double',
    invest: 'Stock',
    movie: 'Mission',
    friends: 'Many'
}

let keys = Object.keys(western);
console.log(keys);
let vals = Object.values(western);
console.log(vals);
let ent = Object.entries(western);
console.log(ent);
console.log(ent[2][1]); // 2 is for column and 1 is for rows 
console.log(ent[2][0]); // 2 is for column and 1 is for rows

