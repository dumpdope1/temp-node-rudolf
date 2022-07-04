const http = require("http");

const server = http.createServer(function(req, res) {
    if (req.url === "/") {
        res.end("Welcome to our Homepage");
    }
    if (req.url === "/about") {
        res.end("Here is our short history");
    }
        res.end(`<h1>Ooops!</h1>
        <p>We can't seem to find the page that your looking for</p>
        <a href = "/">Go back to home</a>`)
})

server.listen(3000)