const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "tiger",
  database: "zameen",
});

app.post("/api/register", (req, res) => {
  const { name, email, contact, password } = req.body;
  const sqlInsert =
    "INSERT INTO user (name, email, contact, password) values (?, ?, ?, ?)";
  db.query(sqlInsert, [name, email, contact, password], (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
    db.query(
      "SELECT * FROM user where email = ? AND password = ?",
      [email, password],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
        if (result) {
          res.send(result);
        } else {
          res.send({ message: "wrong name or password entered" });
        }
      }
    );
});

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM user";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

// app.get("/", (req, res) => {
// const sqlInsert =
// "INSERT INTO user (name, email, contact) VALUES ('aziz', 'aziz@malir.com', 34455666)";
// db.query(sqlInsert, (error, result) => {
//   console.log("error", error);
//   console.log("result", result);
//   res.send("hello");
// });
// });

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
