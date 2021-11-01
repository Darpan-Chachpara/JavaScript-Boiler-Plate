
// for (const n of names)  --> of is used for ARRAY
// for (const n in names)  --> in is used for OBJECT


//For of loop
const names = ["Youtube", "Google", "Amazon", "Netflix", "Instgram"];

for (const n of names) {
    console.log(n);
}

const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "Facebook",
    dc : "DarpanChachpara",
}
for(const s in symbols){
    // console.log(s); // key
    // console.log(symbols[s]); // value
    console.log(`Key is : ${s} and value is : ${symbols[s]}`);
}