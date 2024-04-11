const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const PORT = 3003;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const conectionToDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

//POST
app.post("/zoo", (req, res) => {
  const sqlQuery = `INSERT INTO zoo_museum(name,type,weight,lives_in_zoo) values(?,?,?,?)`;
  conectionToDB.query(
    sqlQuery,
    [req.body.name, req.body.type, req.body.weight, req.body.lives_in_zoo],
    function (err, result) {
      if (err) throw err;
      res.json({ message: `Succes` });
    }
  );
});

//get
app.get("/zoo", (req, res) => {
  const sqlQuery = `SELECT id,name,type,weight,lives_in_zoo FROM zoo_museum`;
  conectionToDB.query(sqlQuery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});
//delete
app.delete("/zoo/:id", (req, res) => {
  const sqlQuery = `DELETE FROM zoo_museum Where id =?`;
  conectionToDB.query(sqlQuery, [req.params.id], function (err, result) {
    if (err) throw err;
    res.json({ message: `Deleted` });
  });
});

//UPDATE
app.put("/zoo:id", (req, res) => {
  const sqlQuery = `UPDATE zoo_museum SET name=?, type=?, weight=?, lives_in_zoo=? WHERE id=?`;

  conectionToDB.query(
    sqlQuery,
    [
      req.body.name,
      req.body.type,
      req.body.weight,
      req.body.live_in_zoo,
      req.params.id,
    ],
    function (err, result) {
      if (err) throw err;
      res.json({ message: `updated`, result });
    }
  );
});

//LOCALHOSTO PORTAS
app.listen(PORT, () => {
  console.log(`listenis port ${PORT}`);
});
