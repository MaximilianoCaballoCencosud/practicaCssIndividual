const express = require("express");
const path = require("path");
const server = express();
const publicFolderPath = path.resolve(__dirname, "./public");

server.use(express.static(publicFolderPath));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});
server.listen(3000, (req, res) => {
  console.log(`Servidor escuchando en el puerto 3000`);
});
