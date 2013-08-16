<script src="/socket.io/socket.io.js"></script>
<script>
//added on 16th-Aug-2013
  var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>