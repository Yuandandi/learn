const fs = require("fs")

// // {{{ .mkdir() ; make Directory

// if (!fs.existsSync("./new")) { // after add this will do nothing if Directory exists
//     fs.mkdir("./new", (err) => { 
//         if (err) throw err;
//         console.log("Directory created")
//     });
// };


// // if Directory exist ; [Error: EEXIST: file already exists, mkdir './new'] {

// // // }}};
// {{{ remove Directory

if (fs.existsSync("./new")) {  // if exist 
    fs.rmdir("./new", (err) => {  // then remove
        if (err) throw err;
        console.log("Directory removed")
    });
};


// // }}}
