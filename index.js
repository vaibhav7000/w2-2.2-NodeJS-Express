// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);


// ecmascript -> website / organisation that writes the docs / specification for all the scripting lanaguages like JS. All the theoratical stuff related to JS like Number, Booleans, Promise, Strings, arrays, Objects etc is written by the ECMA.
// JS is scripting language that is based on the docs of the ECMA => it conforms to the docs

// NodeJS is the runtime / compiler (converts JS code into 0's and 1's) for the JS => whosoever is making the the compiler for the JS should implement the compiler according to the ecmascript docs for JS. NodeJS is based on the chromes V8 engine (compiler for JS on google chrome) + extra functionaly like 

// => every time when the ECMASCRIPT docs for JS changes the compilers that is used to run the JS should also to be get updated according to the docs

// Using NodeJS (that provides the environment to run the JS outside the browser) we can build backend applications like CLIS, Video-Player, mobile-apps, networking applications(these communicates with other machines over the internet using a protocol) (http server) using JS

// backend-applications are processes / programs that runs on machine directly not on the browser

// NodeJS will be used to create backend application (programs / process that runs on the machine) and the most important is the networking application (http server)

// http server (networking application) /  backend application created using NodeJS. These application are used to communicate with the machines over the internet using some protocol (http protocol / rules / regulation)

// the machines that will be communicating using the networking application (backend-application) over the internet will already know the protocol they will follow

// Through NodeJS we will be making networking application (backend application), the networking applications are used to communicate with other machines over the internet using protocols (http, webrtc etc) => the other machines over the internet will be communicating with my networking app based on some protocol and hence sharing the data with them over the internet and hitting some business logic

// Using NodeJS the networking application that we will build will based on the http protocol / we will called that application as http server 

// Now lets see how the communications betweens the two parties (client / frontend <----> http server / backend application ) will happens

// Through NodeJS we will be building backend applications like CLIS, VIDEO-PLAYER, MOBILE-APPS, NETWORKING APPLICATIONS (programs/ process that runs on the machine directly) in Javascript
// The most important backend application is Networking applications (these applications are used to communicate with other machine over the internet based on some protcols (http, webrtc))
// Protocols provides rules and regulations based on which we need to communicate with other machine and for the other machines too

// if the networking application is using http protocol then we call that as http server

// After creating the backend application we will host the application on the other machine that will be connected to the internet (public IPS and map that with a dommain name) and the client will always sends the request

// In http protocol, the communication starts always from the client side because its know the address (URL or complicate with IP) of the http server 

// These are the protocol rules that we need to follow if the networking application follows http
// 1. Communication from the client side (sending request / data from the client to the backend application)
// -> Which protocol the backend application is using this will be mentioned in the URL / domainName
// -> Url of the server (where are server is started) / IP / Ports
// -> Route (/ ,/addTodo, /deleteTodo, /updateTodo) different end points on which the frontend / client will hit, these will always comes after the URL / domainName
// -> header, body, query params (where the client will attaching the data)
// -> Method (get, post, put, delete)

// URL -> http://vaibhavchawla.com http is the procotol, / is the route, by default the method would be get, url vaibhavchawla.com 

// The backend applications are always used to do some computation that is provided by the client / frontend
// the frontend application always send request / data to the backend application => alwaays require URL 

// 2. Communication from the Server Side ( sending response / data from the backend application to the client)
// -> Response Headers (most of time will be when hitting the server for the first time)
// -> response body
// -> Status code 


// IP address are the ways using which the one machine can find other machine over the internet

// when sending the request to the http server , the browser converts the URL using the DNS resolution into the IP address of the machine where server is started and hence send the request to the machine where the application is started

// NodeJS provides us http module (like fs module) using which we can build the networking application (http server), But we will be using express that uses the same http module of NodeJS and makes the thing easy