const fs = require("fs");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.status(200).send("Connection stablished");
});

const sendRandomJson = (socket) => {
  const min = 1;
  const max = 4;
  const randomNumber = Math.trunc(Math.random() * (max - min) + min);
  fs.readFile(
    `./data/citiesPollutionEurope_${randomNumber}.json`,
    (err, data) => {
      if (err) throw err;
      const pollutionCities = JSON.parse(data);
      socket.emit("serverPollutedEurope", pollutionCities);
    }
  );
};

let interval;
var timeInterval = 300000;

io.on("connection", (socket) => {
  console.log("New client connected");
  sendRandomJson(socket);

  interval && clearInterval(interval);
  interval = setInterval(() => sendRandomJson(socket), timeInterval);

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

server.listen(8080, () => {
  timeInterval = process.argv[2] ? process.argv[2] : timeInterval;

  console.log(`Listening on port 8080`);
  console.log(`The server sends new information every ${timeInterval} ms`);
});
