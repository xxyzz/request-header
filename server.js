var express = require('express');
var app = express();
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get("/api/whoami", function (req, res) {
  res.json({
    ip: req.headers["x-forwarded-for"].split(',')[0] || req.socket.remoteAddress,
    laguage: req.headers["accept-language"].split(',')[0],
    software: req.headers["user-agent"].split(/[\(\)]/)[1]
  });
});
app.listen(process.env.PORT);
