// Socket.IO server.

var io = require('socket.io')(1112);

io.on('connection', function(socket){
    // User connected
    console.log('User connected');

    socket.on('join', function(data){
        socket.join(data.room);
        socket.nick = data.nick;
        console.log('Joining room: ' + data.room + ', username: ' + data.nick);
    });

    socket.on('message', function(msg){
        console.log(socket.nick, msg);
        io.emit('message', {nick: socket.nick, msg: msg});
    });
});
