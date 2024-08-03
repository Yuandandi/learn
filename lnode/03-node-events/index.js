const logEvents = require("./logEvents.js"); // module export

const EventEmitter = require("events")

class MyEmitter extends EventEmitter {};

// initialize Object
const myEmitter = new MyEmitter();

// add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
    // emit the event
    myEmitter.emit("log", "log event emitted")
}, 2000); // emit mesage wait for 2 seconds
