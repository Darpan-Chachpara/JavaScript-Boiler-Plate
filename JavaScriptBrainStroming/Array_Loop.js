var char = ['Darpan', 'Meet', 'Bhargav', 'Darshan', 'Dhaval', 'Darpan'];
console.log(char);
console.log(char.length);
console.log(char[char.length-1]);

char.push('VRU') // will get added at last
console.log(char);

char.pop('VRU') // will get removed at last
console.log(char);

char.unshift('VRU') // will get added at start
console.log(char);

char.shift('VRU') // will get removed at start
console.log(char);


var charrr = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(charrr)
charrr.splice(0, 1, 'ABC') // position 0 of index and 1 for number of changes
console.log(charrr);

charrr.splice(1, 2, 'XYZ') // will start with index 1 and will replace 2 value (replace 1 and 2 with new name)
console.log(charrr);

charrr.splice(1, 1, 'PQR', 'MNO') // will 1 and replace with PQR and MNO
console.log(charrr);

charrr.splice(1, 3) // will 1,2,3
console.log(charrr);

charrr.reverse() // reverse order
console.log(charrr);



//For LOOPs
var lists = ['Darpan', 'Meet', 'Bhargav', 'Darshan', 'Dhaval', 'Payal', 'Mom', 'Dad'];
var num = lists.length;

//Initialize; test; increment
// var i=0
// for(; i<num; i+=1){ declaring variable outside and way of of increment
for( var i=0; i<num; i++){
    console.log(lists[i]);
} // in ascending way

for( let i=num-1; i>=0; i--){
    console.log(lists[i]);
} // in descending way


//ForOF loop
for (great of lists){
    console.log("Find me:" +great);
}

//While loop
let see = 0;
while(see < 10 ){
    see++;
    if(see === 5) continue;
    // if(i === 8)break;
    console.log(see);
}


//Do while Loop :- will rin always one time
let dee = 0;
do{
    dee++;
    if(dee === 7) break;
    console.log(dee);
}while(dee < 10);

//FOR..IN Loops
var monsters = {'Canada': 'Huawai', 'Nepal': 'Botad', 'China': 'Chiwn'};
console.log(monsters);
// var in object
for(let prop in monsters){
    // console.log(prop);  //for key
    // console.log(monsters[prop]); //for value
    console.log(prop,monsters[prop]); // both key value pair
}
// if no key then it will index
var petsss = ['A','F','J','L'];
console.log(petsss);
// var in object
for(let prop in petsss){
    // console.log(prop);  //for key will take INDEX
    // console.log(petsss[prop]); //for value
    console.log(prop,petsss[prop]); // both key value pair
}

//FOREACH loop will not give output in array format have to force to make it happen
let foreachhh = ['YES','NO','NOW','SHOW','RELAX','PATTERN','COLD','SUMMER','WINTER'];
foreachhh.forEach(outter);
function outter(item, index, array){  // item is the eg:- YES
    console.log(index, item);         // index is the number eg:- [0]
    console.log(index, item, array);  // array will represent the overall data in [] form ed:- ['YES', ...]
}

foreachhh.forEach(function(item, index, array){
    if( item === 'YES'){
        item = item.toLowerCase();
    }else{
        item = item.toUpperCase();
    }
    console.log(index, item);
});

//NESTED loops
let twoD = [[1,2,3,4,5,6,7],
            [11,22,33,44,55,66,77,88],
            [111,222,333,444,555,666]];
let rows = twoD.length;
for(let i=0; i<rows; i++){
    let items = twoD[i].length;
    console.log(i, items)
    for(let n=0; n<items; n++){
        console.log(twoD[i][n]);
    }
}

let bigHero = { character:[
    {name: 'Hippo', voice:'Slow'},
    {name: 'Rino', voice:'Fast', prop:12},
    {name: 'Triono', voice:'Medium'},
    {name: 'Lizard', voice:'Average'}
]};

let chars = bigHero.character; // bigHero['character'];
let len = chars.length;
for(let i=0; i<len; i++){
    console.log(chars[i]);
}
for(let n=0, len=chars.length; n<len; n++){
    console.log(chars[n]);
    console.log(chars[n].name);
    console.log(chars[n]['voice']);
}
for(let j=0, len=chars.length; j<len; j++){
    for(let prop in chars[j]){
        console.log(prop, chars[j].prop, chars[j][prop]);  // .prop will give undefine as that key is not defined , to check the the rest write prop:12 in line 104 and check
    }
}



//OBJECTs
var dog = {"name":"XYZ", "type":"dogy"}; //inside {} name is object
console.log(dog);
var cat = {"name":"PQR", "type":"caty"}; //inside {} name is object
console.log(cat);

var dogg = ["XYZz", "dogyy"]; //inside [] name is array
console.log(dogg);

var pets = [dog, cat];
console.log(pets);

var petss = [{"name":"XYZ", "type":"dogy"}, cat]; //{"name":"XYZ", "type":"dogy"} is a object literal
console.log(petss); //same result as of above line 65

petss.push({"name":"MNO", "type":"city"});
console.log(petss);

// two ways to add details
cat.age = 2;
// dog["age"] = 14;
console.log(petss);

// Setting age for every object using index
petss[0].age = 14;
petss[2]["age"] = 6;
console.log(petss);

petss[1].age = 14;
petss[1]["hungry"] = true;
console.log(petss);
console.log(cat); // new and old list both will be updated


//Array concat method
let a = [2,3,4,5];
let b = [1,6,7];

let c = a.concat(b);
console.log("c", c);

let d = [].concat(a, b, c);
console.log("d", d);

let e = [].concat(a, b, c).sort();
console.log("e", e);

// String split and Array Join
let sentence = "Hello world welcome you to my birthday party";

let words = sentence.split(" ");
console.log(words);
let wordss = sentence.split(" ").sort();
console.log(wordss);
let wordsss = sentence.split("welcome");
console.log(wordsss);
let wordssss = sentence.split("");
console.log(wordssss);

let wordsssss = words.join("-");
console.log(wordsssss);

let sumall = words.join("");
console.log(sumall);

let alladded = sentence.split(" ").sort().join(" ");
console.log(alladded);

//Array Every()
let numberss = [40,50,60,70,80,90,100,20,30];
let greaterThan20 = numberss.every(function(num){
    return num>20;
});
console.log(greaterThan20);

let greaterThan10 = numberss.every(function(num){
    console.log(num);
    return num > 10;
});
console.log(greaterThan10);