const mysql = require("mysql2");

const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "daftar_tugas",
};

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error("Gagal konek MySQL:", err.message);
    throw err;
  }
  console.log(`MySQL Connected to ${dbConfig.host}/${dbConfig.database} as ${dbConfig.user}`);
});

module.exports = db;
