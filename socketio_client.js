import io from "socket.io-client";

const socket = io("http://143.248.138.8:3000");

socket.on("connect", () => {
  console.log("connection server");
});
