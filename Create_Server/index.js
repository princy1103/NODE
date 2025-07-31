const { log } = require('console')
const http = require('http')
const port = 5050

const server = http.createServer((req, res) => {
    res.end("Hello World !!")
})

server.listen(port, (err) => {
    !err ? console.log(`server port start on port ${port}`) : null; 
})