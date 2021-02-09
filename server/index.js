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

let interval;
var timeInterval = 300000;
var pollutionCities = null;

const sendWithDelay = (socket) =>
  setTimeout(function () {
    socket.emit("serverPollutedEurope", pollutionCities);
  }, Math.random() * 2000);

const sendRandomJson = (socket) => {
  const min = 1;
  const max = 4;
  const randomNumber = Math.trunc(Math.random() * (max - min) + min);
  fs.readFile(
    `./data/citiesPollutionEurope_${randomNumber}.json`,
    (err, data) => {
      if (err) throw err;
      pollutionCities = JSON.parse(data);
      sendWithDelay(socket);
    }
  );
};

io.on("connection", (socket) => {
  console.log("New client connected");

  interval && clearInterval(interval);
  interval = setInterval(() => sendRandomJson(socket), timeInterval);
  pollutionCities ? sendWithDelay(socket) : sendRandomJson(socket);

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
