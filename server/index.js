const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const e = require("express");

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
      res.send(error);
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

// register property:

app.get("/api/properties", (req, res) => {
  const sqlGet = "SELECT * FROM sell";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/property/me", (req, res) => {
  // const { purpose, property_type, city, address, price, land_area, contact, description } = req.body;
  const purpose = req.body.purpose;
  const type = req.body.type;
  const city = req.body.city;
  const address = req.body.address;
  const price = req.body.price;
  const area = req.body.area;
  const contact = req.body.contact;
  const description = req.body.description;

  db.query(
    "INSERT INTO sell (purpose, type, city, address, price, area, contact, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [purpose, type, city, address, price, area, contact, description],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.get("/api/property/:PID", (req, res) => {
  const { PID } = req.params;
  const sqlGet = "SELECT * FROM sell WHERE PID=?";
  db.query(sqlGet, PID, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});


app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM sell";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

// app.get("/", (req, res) => {
//   const sqlInsert =
//   "INSERT INTO sell (purpose, property_type, city, address, price, land_area, contact, description) VALUES ('aziz', 'sell', 'karachi', 'malir', '200000', '120','34455666', 'house')";
//   db.query(sqlInsert, (error, result) => {
//     console.log("error", error);
//     console.log("result", result);
//     res.send("hello");
//   });
//   });

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
