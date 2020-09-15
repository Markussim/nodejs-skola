var http = require('http'); // 1 - Import Node.js core module
const fs = require('fs')


var server = http.createServer(function (req, res) {   // 2 - creating server
    var raw = fs.readFileSync('./index.html', 'utf8')

    var send = raw.replace('jkdhfjkdhskjf', req.connection.remoteAddress)

    res.write(send)
    res.end()

});

server.listen(80); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
