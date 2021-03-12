'use strict';

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    const msg = randomFunction(req, res)
    res.end(msg);
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});

function randomFunction(req, res) {
    let helloNode = 'Hello Node!\n';
    log(helloNode);
    return helloNode;
}

function log(str){
    console.log(str);
}