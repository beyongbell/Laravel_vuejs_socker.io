var Express = require('express')
var app = new Express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

var port = process.env.PORT || 6999

io.on('connection',function(socket) {
    console.log('a user connected ', socket.id)
    socket.on('chatMessage', function (msg) {
        console.log('socket by : ', socket.id, ' message: ' + msg)
        io.emit('chatMessage', msg)
    })
});

http.listen(port, function () {
    console.log('Run Port // localhost:', port)
})