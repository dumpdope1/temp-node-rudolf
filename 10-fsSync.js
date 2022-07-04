const {readFileSync, writeFileSync} = require("fs");
console.log("start");

const first = readFileSync("./content/sub-folder/first.txt", "utf-8")
const second = readFileSync("./content/sub-folder/text.txt", "utf-8")

writeFileSync("./content/sub-folder/reuslt-sync.txt",
    `Here is the result: 
    ${first}, ${second}`, 
    {flag: 'a'}
);
console.log("done with the task");
console.log("Starting the next one");