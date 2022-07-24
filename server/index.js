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
  password: "mypassword",
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

app.get("/api/user/me/:CID", (req, res) => {
  const { CID } = req.params;

  const sqlGet = "SELECT * from user where CID = ?";
  db.query(sqlGet, CID, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.get("/api/users", (req, res) => {
  const sqlGet = "SELECT * from user";

  db.query(sqlGet, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.delete("/api/remove/user/:CID", (req, res) => {
  const { CID } = req.params;
  const sqlRemove = "DELETE FROM user WHERE CID=?";
  db.query(sqlRemove, CID, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

// register property:

app.get("/api/properties", (req, res) => {
  const sqlGet = "SELECT * FROM sell";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get("/api/properties/admin", (req, res) => {
  const sqlGet =
    "SELECT sell.PID, sell.CID, sell.purpose, sell.type, sell.city, sell.price, sell.area, user.name, user.email, user.contact from sell JOIN user ON sell.CID = user.CID";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.delete("/api/remove/property/:PID", (req, res) => {
  const { PID } = req.params;
  const sqlRemove = "DELETE FROM sell WHERE PID=?";
  db.query(sqlRemove, PID, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

// Running code:

app.post("/api/property/me", (req, res) => {
  // const { purpose, property_type, city, address, price, land_area, contact, description } = req.body;
  const CID = req.body.CID;
  const purpose = req.body.purpose;
  const type = req.body.type;
  const city = req.body.city;
  const address = req.body.address;
  const price = req.body.price;
  const area = req.body.area;
  const contact = req.body.contact;
  const description = req.body.description;
  const image = req.body.image;

  db.query(
    "INSERT INTO sell (CID, purpose, type, city, address, price, area, contact, description, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      CID,
      purpose,
      type,
      city,
      address,
      price,
      area,
      contact,
      description,
      image,
    ],
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

// register project:

app.post("/api/project/new", (req, res) => {
  const name = req.body.name;
  const city = req.body.city;
  const location = req.body.location;
  const area = req.body.area;
  const start_time = req.body.start_time;
  const end_time = req.body.end_time;
  const total = req.body.total;
  const investor = req.body.investor;
  const monthly_installment = req.body.monthly_installment;
  const image = req.body.image;

  db.query(
    "INSERT INTO project ( name, city, location, area, start_time, end_time, total, investor, monthly_installment, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      name,
      city,
      location,
      area,
      start_time,
      end_time,
      total,
      investor,
      monthly_installment,
      image,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.get("/api/project/:PRID", (req, res) => {
  const { PRID } = req.params;
  const sqlGet = "SELECT * FROM project WHERE PRID=?";
  db.query(sqlGet, PRID, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

app.get("/api/projects", (req, res) => {
  const sqlGet = "SELECT * FROM project";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

// Registeration:

app.post("/api/project/registeration/:PRID", (req, res) => {
  // const { purpose, property_type, city, address, price, land_area, contact, description } = req.body;
  const { PRID } = req.params;

  const CID = req.body.CID;
  const installation = req.body.installation;

  db.query(
    "INSERT INTO registeration (PRID, CID, installation) VALUES (?, ?, ?)",
    [PRID, CID, installation],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

// app.get("/", (req, res) => {
//   const sqlInsert =
//   "INSERT INTO registeration ( PRID, CID, installation) VALUES ('3', '5', '6')";
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