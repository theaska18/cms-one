<!DOCTYPE html>
<html>
<head>
  <title>Socket.io Test</title>
  <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
</head>
<body>
  <h1>WebSocket Client</h1>
  <script>
    const socket = io("http://10.147.17.3:13000");

    socket.on("message", msg => {
      console.log("Message from server:", msg);
    });
	socket.on("chat", msg => {
      console.log("Chat from server:", msg);
    });
    socket.emit("chat", "Halo dari client!");
  </script>
</body>
</html>
