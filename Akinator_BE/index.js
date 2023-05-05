const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const db = mysql.createPool({
  host: "sql12.freesqldatabase.com",
  user: "sql12615682",
  password: "iZcTdrx8Ap",
  database: "sql12615682",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Getting dialog
app.get("/getDialog", (req, res) => {
  const historyNumber = req.body.historyNumber;
  const sqlSelect = `SELECT * FROM history WHERE number = ? ORDER BY timestamp, ID ASC`;
  db.query(sqlSelect, [historyNumber], (err, result) => {
    res.send(historyNumber);
  });
});

app.get("/getDialog0", (req, res) => {
  const sqlSelect = `SELECT * FROM history WHERE number = 0 ORDER BY timestamp, ID ASC`;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.listen(5174, () => console.log("running on port 5174"));
