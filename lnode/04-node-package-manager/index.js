// console.log("gettho"); // testing nodemon server

// import format modules from date-fns package
const { format } = require("date-fns")
const { v4: uuid } = require("uuid"); // import v4 as uuid (here using common syntax)

// console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss")); // 20240724	01:22:54 ; year month date tab hour minute second

// console.log(uuid()); // 9ccd6e60-f61d-4c4e-b3ae-6f47b567c8e5 ; uuid is always different // uuid();
