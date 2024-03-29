const http = require("http");
const fs = require("fs");

const currentPort = process.argv[2];
const dir = process.argv[3];

const server = http.createServer((request, response) => {
  response.writeHead(200, "content-type: text/plain");
  fs.createReadStream(dir).pipe(response);
});
server.listen(currentPort);
