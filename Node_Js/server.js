const http = require('http');
const app = require('./app');

const port = process.env.PORT || 9000;
// console.log(port);
const server = http.createServer(app);

server.listen(port, ()=>{
    console.log("My Port is",port);
});