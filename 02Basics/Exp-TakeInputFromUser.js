//First Way
//const readline = require('readline'),createInterface({
const readline = require('readline')  // Second Way
const use = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

use.question('WHo are You?  ', name =>{
    console.log(`Hello Welcome: ${name}!`);
    use.close();
});