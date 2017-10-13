
DROP DATABASE IF_EXISTS cupcakes_db;
CREATE DATABASE cupcakes_db;
USE cupcakes_db;

CREATE TABLE cupcakes (
	id INTEGER(10) AUTO_INCREMENT NOT NULL,
	cupcake_name VARCHAR(200),
	eaten BOOLEAN DEFAULT false,
	the_date TIMESTAMP,
	PRIMARY KEY (id)
);

