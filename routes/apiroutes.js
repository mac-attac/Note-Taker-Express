const router = require("express").Router();
const fs = require("fs");

router.get("/notes", (req, res) => {
  fs.readFile("../db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    res.json(data);
  });
});

router.post("/notes", (req, res) => {
  fs.readFile("../db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    const parsedArray = JSON.parse(data);
    const updatedArray = [req.body, ...parsedArray];
    fs.writeFile("..db/db.json", updatedArray, (err) => {
      if (err) throw err;
      console.log("Successfully wrote to file.");
      res.json = true;
    });
  });
});

module.exports = router;
