CREATE DATABASE IF NOT EXISTS MunicipalDashboard;

USE MunicipalDashboard;

CREATE TABLE Municipalities(
    id SMALLINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(25),
    population INT,
    tier CHAR(2),
    PRIMARY KEY (id));

CREATE TABLE Categories(
	line_number SMALLINT NOT NULL,
	category VARCHAR(50) NOT NULL,
	PRIMARY KEY (line_number));


CREATE TABLE ExpenseData(
id SMALLINT NOT NULL AUTO_INCREMENT,
c_id SMALLINT NOT NULL,
`year` YEAR NOT NULL,
wages INT NOT NULL,
interest INT NOT NULL,
materials INT NOT NULL,
contracted_services INT NOT NULL,
rents_fin_expenses INT NOT NULL,
external_transfers INT NOT NULL,
total_before_adjustments INT NOT NULL,
total_expenses INT NOT NULL,
adjustments INT NOT NULL,
program_support INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (c_id) REFERENCES Categories (line_number)
);