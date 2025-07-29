const http = require('http');
const fs = require('fs');
const port = 3000;

const fileRequest = (req, res) => {
    let filename = '';
    switch (req.url) {
        case '/':
            filename = './index.html';
            break;
        case '/login':
            filename = './Login.html';
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
    }

    fs.readFile(filename, (err, result) => {
        if (!err) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(result);
        }
    });
};

const server = http.createServer(fileRequest);

server.listen(port, (err) => {
    !err
        ? console.log(`Server started on ${port}`)
        : console.log('Server not started');
});
