
//Events :- A signal that somethings has happened

//HTTP :- event -> New Request

const EventEmitter = require ('events'); // EventEmitter is a class not a function
// Class have bunch properties
//eg:- class is Human(body) and object is Darpan(parts)
const emitter = new EventEmitter(); // emitter is a object(instance of a class)
EventEmitter.defaultMaxListeners = 50   // limit we can set for any instance

//Register a listener (intersted in a event) will called when argument passed is called
// ( addListner / on ) is same.
emitter.addListener('messageLogged', function(){ // Two argument:- [1] is a messageLogged(argument coming) and [2] callback function or actual listener
    console.log('Listener called');
}); //syncro function
emitter.on('messageLogged', () => {
    console.log('Listener called');
}); //asyncro function

//emit can callback/function as many number of time we want.
//Raise an event
// emit:- to raise an event(making a noise, produce - signalling)
emitter.emit('messageLogged') //passing argument

// We can not write listener after emit because emit will check all the logic before it is called, once it is called it will not go in next line
// in EVENTS we can create-, fire-, and listen for- your own events

emitter.on('checkpage', (sc, msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
});
emitter.emit("checkpage", 200, "OK");

for(let i=0; i < 15; i++){ // for maximum number we have use defaultMaxListeners
    emitter.on('userJoin', (user, email) => {
        // console.log(`Your name is: ${fg} and your email is: ${hj}`);
        console.log(user);
    });
}
emitter.emit("userJoin",{
    user: "Darpan",
    email: "darpan@gmail.com"
});


var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var dar = new Person('dar');
var dar1 = new Person('dar1');
var dar2 = new Person('dar2');
var people = [dar, dar1, dar2];

people.forEach(function(check){
    check.on('speak', function(mssg){
        console.log(check.name + ' said: ' + mssg);
    });
});

dar.emit('speak', 'Helo bro');
dar1.emit('speak', 'Helo dude');
dar2.emit('speak', 'Helo bachi');