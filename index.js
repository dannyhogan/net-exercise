const { createServer } = require('net');

const server = createServer(sock => {
  console.log('Client connection!');
  sock.write('Hello client!');
  
  sock.on('data', data => {
    console.log(data.toString());
  });
});


server.listen(7890);
