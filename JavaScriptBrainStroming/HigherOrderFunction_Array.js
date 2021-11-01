
// Destructive Methods(changes the original array):- sort,reverse,splice
// Non-Destructive Methods(do not changes the original array):- slice,filter,map


const companies = [
    {name : "Company One", category : "Finance", start : 1981, end : 2003},
    {name : "Company Two", category : "Retail", start : 1992, end : 2008},
    {name : "Company Three", category : "Auto", start : 1999, end : 2007},
    {name : "Company Four", category : "Retail", start : 1989, end : 2010},
    {name : "Company Five", category : "Technology", start : 2009, end : 2014},
    {name : "Company Six", category : "Finance", start : 1987, end : 2010},
    {name : "Company Seven", category : "Auto", start : 1986, end : 1996},
    {name : "Company Eight", category : "Technology", start : 2011, end : 2016},
    {name : "Company Nine", category : "Retail", start : 1981, end : 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// using iterator
// for(let i=0; i<companies.length; i++){
//     console.log(companies[i]);
// }

// forEach (will give single single element from the array)
companies.forEach(function(company){   //you can pass (company, index, array) // argument index array
    console.log(company);
    // console.log(company.name);
});

// using iterator
// let canDrink = [];
// for(let i=0; i< ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

//Using Filter(First Way) if value not present then will give empty array []
// const canDrink = ages.filter(function(age){
//     if(age >=21){
//         return true;
//     }
// });

//Using Filter(Second Way) if value not present then will give empty array []
const canDrink = ages.filter(age => age >=21); //(age, index) if more then one parameter then have to use ()
const retailCompanies = companies.filter(company => company.category === 'Retail');
const dates = companies.filter(date => (date.start >= 1980 && date.start < 1990));
const lastdates = companies.filter(datee => ((datee.end - datee.start) >=10));
console.log(canDrink);
console.log(retailCompanies);
console.log(dates);
console.log(lastdates);
const canDrinkss = ages.filter(age => age <=1);
console.log(canDrinkss);


//Map will give output in array format
const companyNames = companies.map(com => {
    return com.name;
});
const testMap = companies.map(comm => `${comm.name}[${comm.start} - ${comm.end}]`);
const agesquare = ages.map(agee => Math.sqrt(agee));
const ages2 = ages.map(ageee => ageee*2);
//2 map at a time
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age*3);
console.log(companyNames);
console.log(testMap);
console.log(agesquare);
console.log(ages2);
console.log(ageMap);

let dwarves = ['Hello', 'Welcome', 'You', 'Are', 'Great', 'Have', 'Fun'];
let namelength = dwarves.map(function(item, index, array){
    return item.length;
});
console.log(namelength);
let namelengthh = dwarves.map(function(item, index, array){
    return item;
});
console.log(namelengthh);

//Sort 
const sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1;    
    }else {
        return-1;
    }
});
const sortCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);
console.log(sortCompanies);

const sortagessim = ages.sort();
console.log(sortagessim); // will sort according to first digit so this will work for single digit
const sortagesasc = ages.sort((a, b) => a - b); // sort in asscending order
console.log(sortagesasc);
const sortagesdesc = ages.sort((y, z) => z - y); // sort in descending order
console.log(sortagesdesc);


//Reduce
const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);
const ageSums = ages.reduce((total, age) => total + age, 0);
console.log(ageSums);
console.log(ageSum);
const totalyears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalyears);// if 0 is not written then will give object memory


//Combined function
const combined = ages
    .map(age => age * 2) // use single parameter
    // .find(age => age === 10) // use single parameter
    // .some(age => age <= 60) // use single parameter
    .filter(age => age >= 40) // use single parameter
    .sort((d, e) => d - e ) // use double parameter
    .reduce((j, k) => j + k, 0); // use double parameter
console.log(combined);


//Find ( will find for particuilar record)
// undefined if none is found
const found = companies.find((item) => item.category === 'Retail');
console.log(found); // will give first item from the list only ONE

//findIndex ( will find for particuilar record and display index)
// -1 if none is found
const foundd = companies.findIndex((item) => item.category === 'Retail');
console.log(foundd); // will give first item from the list only ONE

//Some (will check for record if present then will give true (1 record is only there then also will give true)) 
const sums = companies.some((item) => item.start <= 1981);
console.log(sums);// Ture , False
const sumss = companies.every((itemm) => itemm.start <= 2006); // will check for every item in list 
console.log(sumss);// Ture , False


//Includes
//Determines whether the array contains a value, returning true or false as appropriate
// Will work in forward search
const checks = [10,20,30,4,50,30,60,40,80]
const includess = checks.includes(30); // will check for every item in list 
console.log(includess);// Ture , False
const includesss = checks.includes(30,6); // will check after index[6] if not present then will return false
// will not go backward search, only forward search
console.log(includesss);


// IndexOf used in selection/flter
//Returns the first (least) index of an element within the array equal
// to an elements, or -1 if none is found. It search the elements from the 0th index number
var myfriend = ['Darpan', 'Meet', 'Bhargav','Darpan', 'Darshan', 'Dhaval', 'Darpan'];
console.log(myfriend.indexOf('Darpan')); // default will start from index[0]
console.log(myfriend.indexOf('Darpan',4)); // from particuilar
console.log(myfriend.indexOf('darpan',3)); // case sesitive so if not present then -1

// lastIndexOf used in selection/flter
//Returns the last (greatest) index of an element within the array equal
// to an elements, or -1 if none is found. It search the elements from last to first.
var myfriends = ['Darpan', 'Meet', 'Bhargav','Darpan', 'Darshan', 'Dhaval', 'Darpan'];
console.log(myfriends.lastIndexOf('Darpan')); // default will start from index[0]
console.log(myfriends.lastIndexOf('Darpan',4)); // from particuilar
console.log(myfriends.lastIndexOf('darpan',3)); // case sesitive so if not present then -1



//Array FLat Method
let numm = [
    1,
    2,
    [3,4,5],
    [6,7],
    8,
    9,
    [
        [10,11],
        [12,13],
    ],
    14,
    15
];
let arr = numm.flat(1); // will got in order way [1] and if list inside list present will make it in single list, 
console.log(arr);
let arr1 = numm.flat(2);// will go ordered way but [2] and if list inside list inside list present will make it in single list,  
console.log(arr1);

//FlatMap
let arr3 = numm.flatMap((entry) => {
    if(Array.isArray(entry)){
        return entry;
    }else{
        //other strings
    }
});
console.log(arr3);


//Array From :- create a new exact copy of array
let names = ['DC', 'KD', 'VD', 'NN'];
let nm2 = Array.from(names);
nm2[1] = 'MM';  // if mades changes will reflect to the new array
console.log(names);
console.log(nm2);


//Array From :- create a new shallow copy of array
let stuff = [123, 'Apu',
            {DCCDDC: "Hello kids"},
            ['Kidding', 'Playing']];
let st2 = Array.from(stuff);
st2[2].DCCDDC = " You are Fired";  // if mades changes will reflect to the new array
console.log(stuff);
console.log(st2);

