const express = require("express");

const app = express();

app.get("/redirected", (req, res) => {
  res.status(200).send("You have been redirected");
});

//200s

app.get("/200", (req, res) => {
  res.status(200).send("OK");
});
app.get("/201", (req, res) => {
  res.status(201).send("Created");
});
app.get("/202", (req, res) => {
  res.status(202).send("Accepted");
});
app.get("/203", (req, res) => {
  res.status(203).send("Non-Authoritative Information");
});
app.get("/204", (req, res) => {
  res.status(204).send("No Content");
});
app.get("/205", (req, res) => {
  res.status(205).send("Reset Content");
});
app.get("/206", (req, res) => {
  res.status(206).send("Partial Content");
});
app.get("/207", (req, res) => {
  res.status(207).send("Multi-Status");
});
app.get("/208", (req, res) => {
  res.status(208).send("Already Reported");
});
app.get("/226", (req, res) => {
  res.status(226).send("IM Used");
});


//300s

app.get("/301", (req,res) => {
  res.redirect(301, '/redirected');
});


//400s
app.get("/400", (req, res) => {
  res.status(400).send("Bad Request");
});
app.get("/401", (req, res) => {
  res.status(401).send("Unauthorized");
});
app.get("/402", (req, res) => {
  res.status(402).send("Payment Required");
});
app.get("/403", (req, res) => {
  res.status(403).send("Forbidden");
});
app.get("/404", (req, res) => {
  res.status(404).send("Not Found");
});
app.get("/405", (req, res) => {
  res.status(405).send("Method Not Allowed");
});
app.get("/406", (req, res) => {
  res.status(406).send("Not Acceptable");
});
app.get("/407", (req, res) => {
  res.status(407).send("Proxy Authentication Required");
});
app.get("/408", (req, res) => {
  res.status(408).send("Request Timeout");
});
app.get("/409", (req, res) => {
  res.status(409).send("Conflict");
});
app.get("/410", (req, res) => {
  res.status(410).send("Gone");
});
app.get("/411", (req, res) => {
  res.status(411).send("Length Required");
});
app.get("/412", (req, res) => {
  res.status(412).send("Precondition Failed");
});
app.get("/413", (req, res) => {
  res.status(413).send("Content Too Large");
});
app.get("/414", (req, res) => {
  res.status(414).send("URI Too Long");
});
app.get("/415", (req, res) => {
  res.status(415).send("Unsupported Media Type");
});
app.get("/416", (req, res) => {
  res.status(416).send("Range Not Satisfiable");
});
app.get("/417", (req, res) => {
  res.status(417).send("Expectation Failed");
});
app.get("/418", (req, res) => {
  res.status(418).send("I'm a teapot");
});
app.get("/421", (req, res) => {
  res.status(421).send("Misdirected Request");
});
app.get("/422", (req, res) => {
  res.status(422).send("Unprocessable Entity");
});
app.get("/423", (req, res) => {
  res.status(423).send("Locked");
});
app.get("/424", (req, res) => {
  res.status(424).send("Failed Dependency");
});
app.get("/425", (req, res) => {
  res.status(425).send("Too Early");
});
app.get("/426", (req, res) => {
  res.status(426).send("Upgrade Required");
});
app.get("/428", (req, res) => {
  res.status(428).send("Precondition Required");
});
app.get("/429", (req, res) => {
  res.status(429).send("Too Many Requests");
});

//500s

app.get("/500", (req, res) => {
  res.status(500).send("Internal Server Error");
});
app.get("/501", (req, res) => {
  res.status(501).send("Not Implemented");
});
app.get("/502", (req, res) => {
  res.status(502).send("Bad Gateway");
});
app.get("/503", (req, res) => {
  res.status(503).send("Service Unavailable");
});
app.get("/504", (req, res) => {
  res.status(504).send("Gateway Timeout");
});
app.get("/505", (req, res) => {
  res.status(505).send("HTTP Version Not Supported");
});
app.get("/506", (req, res) => {
  res.status(506).send("Variant Also Negotiates");
});
app.get("/507", (req, res) => {
  res.status(507).send("Insufficient Storage");
});
app.get("/508", (req, res) => {
  res.status(508).send("Loop Detected");
});
app.get("/510", (req, res) => {
  res.status(510).send("Not Extended");
});
app.get("/511", (req, res) => {
  res.status(511).send("Network Authentication Required");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
