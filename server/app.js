// Socket.IO server.

var io = require('socket.io')(1112);

io.on('connection', function(socket){
    // User connected
    console.log('User connected');

    socket.on('join', function(data){
        socket.join(data.room);
        socket.nick = data.nick;
        console.log('Joining room: ' + data.room + ', username: ' + data.nick);
        socket.last_message = Date.now();
    });

    socket.on('message', function(msg){
        if(socket.last_message - Date.now() < 5 * 1000){
            socket.emit('message', {nick: 'System', msg: 'PLEASE ONLY SEND EVERY 5 SECONDS'});
            socket.last_message = Date.now();
            return;
        }
        socket.last_message = Date.now();
        msg = msg.trim();
        if(msg.length === 0) return;
        io.emit('message', {nick: socket.nick, msg: msg});
    });
});
