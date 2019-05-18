const http = require('http');
const emoji = require('node-Emoji');


http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write(emoji.random().emoji);
    response.end();
}).listen(8080);


/*

npm init -y 
npm install --save *package name*
.gitignore -node_modules
git init
git add .
git commit -m ""


*/