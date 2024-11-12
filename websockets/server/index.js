const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("node:http");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        credentials:true
    },
});

io.on('connection',(socket)=>{
  console.log("User connected");
  console.log("Id",socket.id);
  console.log(socket);
  socket.emit('Meow',`Welcome to the server ${socket.id}`)
  socket.broadcast.emit('Meow',`${socket.id} joined ther server`);
})

app.get("/", (req, res) => {
    res.send("Server is up");
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
