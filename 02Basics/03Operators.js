var num1 = 7;
var num2 = 6;

console.log(num1 + num2);

var answer = num1 > num2;
console.log(answer);


// Real time Example on Discount
//Discount = (ListingPrice - SellingPrice)/ListingPrice * 100
// avoid this type of expression :- a+((b*c)/d)*e

var SellingPrice = 199;
var ListingPrice = 799;

var discountPercent = ((ListingPrice -  SellingPrice) / ListingPrice) * 100;
console.log("Discount is: " + discountPercent);

displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage + " % off");


// To find which type of data we are getting use typeof

var result = ListingPrice > SellingPrice;

console.log(typeof result); // typeof is used to get the type of data
