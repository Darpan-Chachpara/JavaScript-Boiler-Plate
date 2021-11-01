// We were getting issues
// const convertToRs = (dollar) => dollar *64
// const myValue = convertToRs(5);
// console.log(myValue);
// const myValue1 = convertToRs("5");
// console.log(myValue1);
// const myValue2 = convertToRs("five");
// console.log(myValue2); // we will get Nan can not convert string to number


const convertToRs = (dollar) => {
    if (typeof dollar === 'number') {
        return dollar * 64
    }else {
        throw Error('Amount need to be in number')
    }
}

// const myValue2 = convertToRs(5);
// console.log(myValue2); // we will get Output
// const myValue1 = convertToRs('5');
// console.log(myValue1); // we will get error because of typeof
// const myValue = convertToRs("five");
// console.log(myValue); // we will get error because of typeof


try {
    const myValue2 = convertToRs(5);
    console.log(myValue2);
} catch (error) {
    console.log(error);
}

//Can say this is like Finally block will always execute 
console.log('I will not come if program crashes!') // if we got error on line 21 then it will come out and print last line of console
//But if we comment code from (line 27 to line 32) and uncomment code from (line 19 to line 20) then above line will not execute
//because finally block will execute only with try/catch

