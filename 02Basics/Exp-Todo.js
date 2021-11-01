const myTodo = []

myTodo.push('Buy Chocolate');
myTodo.push('Buy Bread');
myTodo.push('Buy Medicine');
myTodo.push('Go to Hotel');

myTodo.forEach(function( todo, index){
    console.log(`Your task no: ${index +1 } is: ${todo}`)
})

for(let i=0; i<myTodo.length; i++){
    console.log(`Your task no: ${i + 1} is: ${myTodo[i]}`)
}