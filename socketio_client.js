import io from "socket.io-client";

const socketclient = io("http://143.248.138.8:3000");

socketClient.on("connect", () => {
  console.log("connection server");
});
