const http = require("http");

const handler = (request, response) => {
  console.log("sample message");
  response.end("Hello World");
};

const server = http.createServer(handler);
const port = 3000;

server.listen(port, (err) => {
  if (err) {
    return console.log(`Wystąpił błąd ${err.message}`);
  }
  return console.log(`Apka działa na porcie ${port}`);
});
