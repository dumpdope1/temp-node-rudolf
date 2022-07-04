// GLOBALS - NO WINDOW !!!

// __dirname  - path to the current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (File)
// process    - info about environment where the program is being executed.


// __dirname  - path to the current directory
console.log(__dirname);

setInterval(()=>{node
    console.log("Hello World!");
}, 1000)

// module     - info about current module (File)

const sayHi = (name)=> {
    console.log(`Hello there ${name}`);
}
sayHi("Rudolf");
