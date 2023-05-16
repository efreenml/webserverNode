const http = require("http");


http.createServer((req, res) => {

  res.write("holi");
  res.end();

}).listen(3033);

console.log("listening on 3033");