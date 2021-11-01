
var ul = document.getElementById('list');
var li;
var checkbox;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

var removeButtonAll = document.getElementById('delete');
removeButtonAll.addEventListener('click', removeItemAll);



function addItem() {
    // console.log('Add Button Clicked')
    var input = document.getElementById('input');
    var item = input.value; // inserting value into the field
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);// grabbing the value coming into input

    if (item === ''){
        return alert ('Please enter Something in the Input box');
    }else {
        //create li
        li = document.createElement('li');

        //create checkbox
        checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item') //optional

        //add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]); // placing input on top
        
        setTimeout(() => {
            li.className = 'visual';
        }, 2); // input which comes will shoe in 2 mili second

        input.value = ''; // to clear the input field after one data entry
    }
}

function removeItem() {
    // console.log('Delete Button Clicked')
    li = ul.children // taking all children present in ul
    for (let index = 0; index < li.length; index++){
        while (li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        }
    }
}

// function removeItemAll() {
//     li = ul.children // taking all children present in ul
//     for (let index = 0; index < li.length; index++){
//         ul.removeChild(li[index])
//     }
// }

function removeItemAll() {
    ul.remove()
}