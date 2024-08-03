// {{{ variables
const fs = require("fs"); // fs (file system) module
const path = require("path");
const fsPromise = require("fs").promises;
// }}}
// console.clear();
// // {{{ .readFile()
// // fs.readFile("./files/starter.txt" (err, data) =>  { // ((curentdir, /files/, filename), err and data we read)
// // fs.readFile("./files/starter.txt", "utf8", (err, data) =>  { // if we passing "utf8" as parameter, we don't need .toString() method again
// fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf8", (err, data) =>  { // better approach rather than hardcoded file path above
//     if (err) throw err;
//     console.log(data); // <Buffer 48 69 20 6d 79 20 6e 61 6d 65 20 69 73 20 64 61 6e 7a 6f 72 0a> ; hex values
//     // console.log(data.toString()); // Hi my name is danzor ; to string method to return as a string
// });

// process.on("uncaughtException", err => {
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(2);
// });

// if the file is not exist;
// There was an uncaught error: Error: ENOENT: no such file or directory, open './files/Hello.txt'
// shell returned 1
// // }}}
// console.log("hellow"); // this will execute before the fs module above run
// // {{{ write file

// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Nice to meet you", (err) => { // filename, letter you want to write, err - complete message, if the file has text and you run again It will override
//     if (err) throw err;
//     console.log("Write completed")
// });

// // }}}
// // {{{ .appendfile()

// fs.appendFile(path.join(__dirname, "files", "append.txt"), "append file will create file if not exists too", (err) => { // filename, letter you want to write, err - complete message, if the file has text and you run again It will override
//     if (err) throw err;
//     console.log("Append completed")
// });

// // }}}
// // {{{ combine .writeFile() and appendfile()

// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "Nice to meet you", (err) => {
//     if (err) throw err;
//     console.log("write complete")

//     fs.appendFile(path.join(__dirname, 'files', "reply.txt"), "\n\nThanks, How are you?", (err) => {
//         if (err) throw err;
//         console.log("Append complete")

//         fs.rename(path.join(__dirname, 'files', "reply.txt"), path.join(__dirname, "newname.txt"), (err) => { // still work event though in different directory, here we use the parent directory of /files/ Directory
//             if (err) throw err;
//             console.log("rename complete")
//         });
//     });
// });

// // }}};

// {{{ with try catch

const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, "files", "starter.txt"), "utf8");
        console.log(data);
        await fsPromise.unlink(path.join(__dirname, "files", "starter.txt")); // remove file
        await fsPromise.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data); // write
        await fsPromise.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you"); // appendFile
        await fsPromise.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseComplete.txt"), "utf8"); // rename file
        const newData = await fsPromise.readFile(path.join(__dirname, "files", "promiseComplete.txt"), "utf8"); // readFile
        console.log(newData);
    } catch (err) {
        console.log(err)
    }
};

fileOps();

// }}};
