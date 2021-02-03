/*
 * @Author: Your name
 * @Date:   2021-02-01 12:11:15
 * @Last Modified by:   Your name
 * @Last Modified time: 2021-02-01 12:11:16
 */
var express = require("express");
var http = require("http");
var app = express();

// Ping The Apps.
app.use(express.static("public"));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
    response.sendStatus(200);
});

// Request Listeners.
var listener = app.listen(process.env.PORT, function () {
    console.log("Your app is listening on port " + listener.address().port);
});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 270000);