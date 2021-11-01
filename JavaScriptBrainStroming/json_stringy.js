
// Storing and transporting Data
// Can be used when data is sent from a server to a web page
//2 method:- [1]parse --> json to object (can call dat directly)
         //  [2] --> converting object to json (can not call data directly)

let obj = { name: 'Darpan',
            last: 'Chachpara',
            age: 25,
            bestscore: 200,
            armed: true,
};

// can call obj directly /  can not call data directly
str = JSON.stringify(obj);
console.log('1', str);
console.log(obj.name);

str1 = JSON.stringify(obj, ['age', 'angry', 'last']);
console.log('\n2', str1);

//can not call obj directly /  can call data directly 
str2 = JSON.parse(str);
console.log('\n3', str2);