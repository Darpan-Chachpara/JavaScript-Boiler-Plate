
const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// First way to get color in console
console.log(window.getComputedStyle(red).backgroundColor); // if there is - then replace it with CapitalAlphabet

//converting to method
// Second way to get color in console
const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};
console.log(getBGColor(pink));


var pinkElementColor = getBGColor(pink);
pink.addEventListener("mouseenter", () =>{
    center.style.background = pinkElementColor;
});


var orangeElementColor = getBGColor(orange);
orange.addEventListener("click", () =>{
    center.style.background = orangeElementColor;
});


var redElementColor = getBGColor(red);
red.addEventListener("click", () =>{
    center.style.background = redElementColor;
});

// using method
const magicColorChange = (element, color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.background = color;
    });
};

magicColorChange(red, getBGColor(red));
magicColorChange(cyan, getBGColor(cyan));
magicColorChange(violet, getBGColor(violet));
magicColorChange(orange, getBGColor(orange));
magicColorChange(pink, getBGColor(pink));