let myDar = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0 // we will get in -
}

let addMeeting = function(todo, meet = 0){ // defaulty meet = 0    
    todo.meetings= todo.meetings + meet
}

let meetDone = function(todo, meet = 0){ // defaulty meet = 0    
    todo.meetDone= todo.meetDone - meet // intially it is 0 so 0 - 5 is (-5)
    return todo.meetDone * -1 // just we were getting meetDone in (-5) so converting it into (+5)
}

// let resetDay = function (todo){
//     todo.meetings = 0
//     todo.meetDone = 0
// }

let getSummaryOfDay = function(todo){
    let meetLeft = todo.meetings - todo.meetDone
    return `you have ${meetLeft} meetings today out of which ${todo.meetDone * -1} is finished` 
}

addMeeting(myDar, 4)

addMeeting(myDar, 2)

meetDone(myDar, 5)

console.log(myDar)
console.log(getSummaryOfDay(myDar))