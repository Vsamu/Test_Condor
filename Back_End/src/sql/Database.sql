CREATE DATABASE photos;

USE photos;

CREATE TABLE details_photos (
  id_photo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  End_point VARCHAR(100),
  Name_photo VARCHAR(100),
  date_photo TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;

DESCRIBE details_photos;

