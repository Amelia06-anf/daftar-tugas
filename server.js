const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// View engine & static assets
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/static", express.static(path.join(__dirname, "public")));

// SSR Home
app.get("/", (req, res) => {
  res.render("index");
});

// Read
app.get("/tugas", (req, res) => {
  db.query("SELECT * FROM tugas", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Create
app.post("/tugas", (req, res) => {
  const { judul, deskripsi, deadline, status } = req.body;
  db.query(
    "INSERT INTO tugas (judul, deskripsi, deadline, status) VALUES (?, ?, ?, ?)",
    [judul, deskripsi, deadline, status],
    (err, result) => {
      if (err) throw err;
      res.send({ msg: "Tugas berhasil ditambahkan!" });
    }
  );
});

// Update
app.put("/tugas/:id", (req, res) => {
  const { judul, deskripsi, deadline, status } = req.body;
  db.query(
    "UPDATE tugas SET judul=?, deskripsi=?, deadline=?, status=? WHERE id=?",
    [judul, deskripsi, deadline, status, req.params.id],
    (err, result) => {
      if (err) throw err;
      res.send({ msg: "Tugas berhasil diupdate!" });
    }
  );
});

// Delete
app.delete("/tugas/:id", (req, res) => {
  db.query("DELETE FROM tugas WHERE id=?", [req.params.id], (err, result) => {
    if (err) throw err;
    res.send({ msg: "Tugas berhasil dihapus!" });
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
