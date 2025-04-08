const eventEmitter = require('events');

const emitter = new eventEmitter();

// Register an Event Listener

emitter.on('greet', () => {
  console.log('Greet event is triggered.');
});

// Emit (Trigger) an Event

emitter.emit('greet');

// Pass Data with Event

emitter.on('user', (name) => {
  console.log(`Hi ${name}, Have a nice day!`);
});
emitter.emit('user', 'Adam');

// Once Listener (only one time)

emitter.once('ping', () => {
  console.log('Ping received once');
});

emitter.emit('ping'); // triggers
emitter.emit('ping'); // ignored

// Multiple Listeners to Same Event
emitter.on('multi', () => {
  console.log("Listener 1: Hello!");
});

emitter.on('multi', () => {
  console.log("Listener 2: Vanakkam!");
});

emitter.emit('multi');

// Remove Listeners
emitter.removeAllListeners('multi');
emitter.emit('multi'); // ignored

// Remove listeners

function sayHi() {
  console.log("Hi!");
}
function sayBye() {
  console.log("Bye!");
}

emitter.on('talk', sayHi);
emitter.on('talk', sayBye);

emitter.emit('talk');

emitter.removeListener('talk', sayHi); // another method : emitter.off('talk', sayHi);

emitter.emit('talk'); 

// Array of listener functions currently attached to the specified event

function greet() {
  console.log("Hello from greet!");
}

function user() {
  console.log("Hello from user!");
}

emitter.on('login', greet);
emitter.on('login', user);

const listeners = emitter.listeners('login');
console.log('listeners : ',listeners);

// Removes all event listeners across all event names.

emitter.removeAllListeners();