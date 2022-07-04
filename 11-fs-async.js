const {readFile, writeFile} = require("fs");

console.log("start");
readFile("./content/sub-folder/first.txt","utf-8", function(error,result) {
    if (error){
         console.log(error);
         return
    }
    const first = result;
    readFile("./content/sub-folder/text.txt","utf-8", function (error,result) {
        if(error){
            console.log(error);
            return
        }
        const second = result;
        writeFile("./content/sub-folder/result-async.txt",
        `Here is the result: ${first}, ${second}`, function(error, result){
            if(error) {
                console.log(error);
            }
            else {
                console.log("done with the task");
            }
        });
    })

})
console.log("starting the next one");