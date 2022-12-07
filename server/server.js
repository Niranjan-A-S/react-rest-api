const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Response from server");
});

app.get("/api", (req, res) => {
  res.json([
    { id: 1, name: "John" },
    { id: 2, name: "Luther" },
    { id: 3, name: "Mark" },
  ]);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening to port ${port}`));
