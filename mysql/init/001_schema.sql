-- Initial schema for daftar_tugas database
CREATE TABLE IF NOT EXISTS tugas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  judul VARCHAR(255) NOT NULL,
  deskripsi TEXT,
  deadline DATE,
  status VARCHAR(50) DEFAULT 'Belum Selesai'
);
