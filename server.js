const http = require('node:http')

const server = http.createServer(function (req, res) {
    if(req.url === '/getsecetdata'){
        res.end("HFT is not far away.");
        return;
    }
    res.end("hello akhilesh the hft guy");
})

server.listen("7654");