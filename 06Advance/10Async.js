const uno = () => {
    console.log("I am One");
};

const dos = () => {
    setTimeout(() => {
        console.log("Wooohooo");
    }, 3000);
    console.log("I am Two");
};

const tres = () => {
    console.log("I am Three");
};

uno();
dos();// setTimeOut function will execute afte 3 sec only and at last
tres();
