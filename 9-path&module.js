const path = require("path");


const filePath = path.join("/content", "sub-folder", "text.txt")
console.log(filePath);

const baseName =  path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname,"content","sub-folder", "text.txt");
console.log(absolute);