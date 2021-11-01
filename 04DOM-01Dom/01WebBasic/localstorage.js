// alert('Hi')
// Check in (browser->Application->local Storage->http://.....

localStorage.setItem('hero', 'Thor'); // key, value
var myHero = localStorage.getItem('hero');
console.log(myHero);

localStorage.setItem('dc', 'Darpan_126_111'); // set item
console.log(localStorage.getItem('dc')); // get item

localStorage.setItem('hero', 'DC');
console.log(localStorage.getItem('dc')); // update item in 'hero' key

localStorage.removeItem('hero'); // deleting item of 'hero' key
myHero = localStorage.getItem('hero'); // for checking that value is deleted
console.log(myHero); // we will get null

localStorage.clear() // will clear entire local storage and we will get null