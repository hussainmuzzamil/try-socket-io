
//var io mai hai require jis mai socket.io hai aur woh sunay ga 80 port par listen k method say
var io = require('socket.io').listen(80);

//io mai socket ko on kar k connection banao then fundtion mai socket pass karo


io.sockets.on('connection', function (socket) {

  socket.emit('news', { hello: 'world' });

  socket.on('my other event', function (data) {

  console.log(data);
  });
});
