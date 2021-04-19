const http = require("http");

const server = http.createServer((req, res) => {
  require("./fetch");

  res.write("done");
  res.end();
});

server.listen(5000);
