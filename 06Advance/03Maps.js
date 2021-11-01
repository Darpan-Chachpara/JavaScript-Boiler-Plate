var myMap = new Map();

myMap.set(1, "Darpan");
myMap.set(2, "Meet");
myMap.set(3, "Bhargav");
myMap.set(4, "Darshan");
myMap.set(5, "Dhaval");

console.log(myMap);

for (let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for (let value of myMap.values()){
    console.log(`Value is ${value}`);
}

for (let [key, value] of myMap){ // myMap.entries()
    console.log(`Key is : ${key} and Value is ${value}`);
}
 
//In forof we use [key, value]****
//In foreach we use [value, key]****

//in for of loop it is upto the user what he want's
//in for each loop default it will give value

// in for of loop you will always get KEY first 
// in for each loop you will always get VALUE first

myMap.forEach((key) => console.log(`${key}`));
myMap.forEach((value) => console.log(`${value}`));
myMap.forEach((v, k) => console.log(`Value is : ${v} and Key is : ${k} `));

myMap.delete(5);
console.log(myMap);