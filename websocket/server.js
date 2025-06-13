const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  
  socket.emit("message", "Halo dari server WebSocket!");

  socket.on("chat", (msg) => {
    console.log("Pesan dari client:", msg);
    socket.broadcast.emit("chat", msg);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`WebSocket server listening on port ${PORT}`);
});
