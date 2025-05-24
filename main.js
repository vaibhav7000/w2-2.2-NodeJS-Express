const express = require("express"); // this returns us the function called createApplication that is used to setup the http server from using module.exports
const server = express();

// To start up the server / networking application
server.listen(3000, function() {
    console.log("The server is started!!")
})

// base route
server.get("/", function(req, res) {
    console.log("The client hits the server")
    res.send("How the things are going???")
})

// we will be using express (that uses the same NodeJS http module) to build an http server / networking application ( that uses http protocol for the communication with the other machines over the internet) that is build on the top of the NodeJS http module to create the http server

// require returns us the exports from the module.exports it will be an object or function or any other variable