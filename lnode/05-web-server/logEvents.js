const { format } = require("date-fns")
const { v4: uuid } = require("uuid")

console.clear();

// common core module;
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`; // \n to go into new line
    
    console.log(logItem);
    
    // apped the ./logs/eventLog.txt with "logItem" format
    try {
        if (!fs.existsSync(path.join(__dirname, "logs"))) { // prevent err
            await fsPromises.mkdir(path.join(__dirname, "logs"));
        }
        // testing;
        await fsPromises.appendFile(path.join(__dirname, "logs", "eventLog.txt"), logItem); // create a file if doesn't exist
    } catch(err) { // catch err
        console.log(err);
    }
};

logEvents("log event emitted!");

module.exports = logEvents;

// console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
// console.log(uuid());
