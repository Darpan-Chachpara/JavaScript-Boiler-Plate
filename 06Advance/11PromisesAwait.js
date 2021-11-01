const uno = () => {
    return("I am One");
};
const dos = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am Two"); // resolve ---> then, reject --->then/catch
        }, 3000);
    })
    
};

const tres = () => {
    return ("I am Three");
};

const callMe = async () => {// async will give promises
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos(); // using await as we are waiting for Promises to resolve line 12
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};

callMe();