const express = require("express");

const app = express();
const port = process.env.APP_PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Hello world",
  });
});

app.get("/health-check", (req, res) => {
  res.json({
    status: true,
    message: "App is active",
  });
});

app.listen(port, () => {
  console.log(`App is running on ${port}.`);
});
