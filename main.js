const express = require("express");
const server = express();


server.listen(3000, function() {
    console.log("The server is started!!")
})

server.get("/", function(req, res) {
    console.log("The client hits the server")
    res.send("How the things are going???")
})

// we will be using express to build an http server / networking application ( that uses http protocol for the communication with the other machines over the internet) that is build on the top of the NodeJS http module to create the http server