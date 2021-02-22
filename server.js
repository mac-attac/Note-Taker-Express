const express = require("express");
const app = express();
const fs = require("fs");

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes/htmlroutes.js"));
app.use("/api", require("./routes/apiroutes.js"));

app.listen(PORT, () => {
  console.log(`Port listening on: ${PORT}`);
});
