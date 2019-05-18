const http = require('http');
const emoji = require('node-Emoji');


http.createServer((request, response) => {
    response.write(emoji.random().emoji);
    response.end();
}).listen(8080);