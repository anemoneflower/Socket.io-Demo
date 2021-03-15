const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io").listen(http);
const port = process.env.PORT || 3000;

////// server

// var jsdom = require("jsdom");
// var JSDOM = jsdom.JSDOM;
// global.document = new JSDOM(``).window.document;
// const io = require("socket.io")(http);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.broadcast.emit("hi");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("message", (msg) => {
    console.log("server socket msg" + msg);
    io.sockets.emit("message1", msg);
  });
  // socket.on("chat message", function (msg) {
  //   console.log("message: " + msg);
  //   var item = document.createElement("li");
  //   item.textContent = msg;

  //   messages.appendChild(item);
  //   window.scrollTo(0, document.body.scrollHeight);
  // });
});

http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});
