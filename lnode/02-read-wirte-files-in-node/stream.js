const fs = require("fs");

const rs = fs.createReadStream("./files/lorem.txt", {encoding: "utf8"}); // create readable stream

const ws = fs.createWriteStream("./files/new-lorem.txt"); // write data to a file stream

// rs.on("data", (dataChunk) => {
//     ws.write(dataChunk);
// });

// better alternative
rs.pipe(ws);
