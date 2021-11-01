
// If you are using :-      '' then have to use +     eg:-console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// If you are using :-      `` then have to use ${}   eg:-console.log(`Fifteen is ${a + b} and 
                                                                    // not ${2 * a + b}.`);
                                                                    
// `\`` === '`' // --> true

//SYNTAX
// `string text`

// `string text line 1
//  string text line 2`

// `string text ${expression} string text`

// tag`string text ${expression} string text`


//Multi-Line strings
console.log('string text line 1\n' +
'string text line 2');

console.log(`string text line 1 
string text line 2`);

//Expression Interpolation
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

let aa = 5;
let bb = 10;
console.log(`Fifteen is ${aa + bb} and
not ${2 * aa + bb}.`);


//Tagged Template
let person = 'Darpan';
let age = 24;
let output = myTag`Hello ${ person } you are ${ age } year.`;
function myTag(output, person, age) {
  let str0 = output[0]; // "Hello "
  let str1 = output[1]; // "you are"
  let str2 = output[2]; // "year."

  if (person === 'Darpan'){
    person = 'Welcome Darpan';
  } else {
    person = 'You are not Admin so';
  }

  if (age > 99){
    age = 'above 25';
  } else {
    age = 'below 25';
  }

  // We can even return a string built using a template literal
  return `${str0}${person}${str1}${age}${str2}`;
}

console.log(output);
// That Mike is a youngster.



// Raw String

function tag(strings) {
    console.log(strings.raw[0]);
  }
  // will count whole text as index[0] if index[1] will give undefine
  tag`string text line 1 \n string text line 2`;
  // logs "string text line 1 \n string text line 2" ,
  // including the two characters '\' and 'n'


let str = String.raw`Hi${2+3}!`;
console.log(str);
// "Hi5!"

console.log(str.length);
// 4 

let yum = Array.from(str).join(',');  //Converting Array to String
console.log(yum); 
// "H,i,5,!"
let de = Array.from(str); //Converting Array to String
console.log(de);
// [ 'H', 'i', '5', '!' ]
let dee = de.join(','); //concatinating with ','
console.log(dee);
// H,i,5,!

// // Taagged templates and escape sequence
// function latex(str) {
//   return { "cooked": str[0], "raw": str.raw[0] }
// }

// let mum = latex`\unicode`
// console.log(mum);

// // { cooked: undefined, raw: "\\unicode" } // raw add[concatinate] (backclash)


//RAW String - backslash concatinate in output \ will come if added in string
// raw_s = r'\'';
// print(raw_s);

// raw_s = r'ab\\';
// print(raw_s);

// raw_s = R'\\\"'  # prefix can be 'R' or 'r';
// print(raw_s);

// Output:-
// \'
// ab\\
// \\\"

const details = String.raw`DARPAN CHACHPARA 126_111`;
console.log(`The data was featured from: ${details}`);
// expected output: "The file was uploaded from: DARPAN CHACHPARA 126_111"

const detailss = String.raw`Hi\n${2+3}!`;
console.log(detailss)
console.log(detailss.length)
// 'Hi\\n5!', the character after 'Hi'
// is not a newline character,
// '\' and 'n' are two characters.

const detailsss = String.raw`Hi\u000A!`;
console.log(detailsss)
// 'Hi\\u000A!', same here, this time we will get the
//  \, u, 0, 0, 0, A, 6 characters.
// All kinds of escape characters will be ineffective
// and backslashes will be present in the output string.
// You can confirm this by checking the .length property
// of the string.