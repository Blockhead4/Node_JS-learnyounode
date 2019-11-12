const http = require("http");
const map = require("through2-map");

const currentPort = process.argv[2];

const upperCaserer = (inStream, outStream) => {
  inStream
    .pipe(
      map(chunk => {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(outStream);
};

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    return res.end("POST only! \n");
  }
  upperCaserer(req, res);
});
server.listen(currentPort);
