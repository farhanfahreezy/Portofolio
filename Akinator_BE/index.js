import { determineFeature } from "./src/main.js";
import * as database from "./src/database.js";
import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from "cors";

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
  const historyNumber = req.query.historyNumber;
  const sqlSelect = `SELECT * FROM history WHERE number = ? ORDER BY timestamp, ID ASC`;
  db.query(sqlSelect, historyNumber, (err, result) => {
    res.send(result);
  });
});

// Get History List
app.get("/getHistory", (req, res) => {
  const sqlSelect = `SELECT number, dialog FROM history WHERE (number, ID) IN (
    SELECT number, MIN(ID)
    FROM history
    GROUP BY number
  )
  ORDER BY number;
  `;
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/sendChat", (req, res) => {
  const number = req.body.number;
  const who = req.body.who;
  const dialog = req.body.dialog;
  const algorithms = req.body.algorithms;
  console.log(number, who, dialog);
  const sqlInsert =
    "INSERT INTO history (number, who, dialog) VALUES (?, ?, ?)";
  db.query(sqlInsert, [number, who, dialog], (err, result) => {
    console.log(err);
  });
  const algo = algorithms === "KMP" ? 1 : 0;
  let qna;
  database
    .getAllQuestionsAndAnswers()
    .then((qna) => {
      const answer = determineFeature(dialog, qna, algo);
      const sqlAns =
        "INSERT INTO history (number, who, dialog) VALUES (?, ?, ?)";
      db.query(sqlAns, [number, 0, answer], (err, result) => {
        console.log(err);
      });
    })
    .catch((error) => {
      console.error(error);
    });
  console.log(qna);
  //   const answer = determineFeature(dialog, qna, algo);
  //   const sqlAns = "INSERT INTO history (number, who, dialog) VALUES (?, ?, ?)";
  //   db.query(sqlAns, [number, 0, answer], (err, result) => {
  //     console.log(err);
  //   });
});

app.listen(5174, () => console.log("running on port 5174"));
