const http = require("http");
const currentPort = process.argv[2];

const parsetime = date => {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
};

const unixtime = date => {
  return { unixtime: date.getTime() };
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "https://example.com");
  const date = new Date(url.searchParams.get("iso"));

  //   console.log(/^\/api\/parsetime/.test(req.url));
  let result;
  if (url.pathname.includes("parsetime")) {
    result = parsetime(date);
  } else {
    result = unixtime(date);
  }

  if (result) {
    res.writeHead(200, "content-type: application/json");
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(currentPort);
