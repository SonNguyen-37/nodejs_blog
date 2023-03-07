const express = require("express");
const app = express();
const port = 3000;

app.get("/pro", (req, res) => {
  res.send("Honebox");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
