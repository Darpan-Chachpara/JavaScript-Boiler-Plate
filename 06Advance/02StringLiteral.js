//First Way
var name = "Darpan\"c";
console.log(name);

//Second Way
var namee = 'Darpan\'C';
console.log(namee);

//Third Way
var nameee = `Darpan`; // `` backtrick or interpoling/interpolation
var fullName = `${nameee} Chachpara`;
console.log(fullName);

console.log(fullName.charAt(0));
console.log(fullName.endsWith("a"));
console.log(fullName.endsWith("?"));
console.log(fullName.includes("Darpan"));
console.log(fullName.includes("ap"));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
