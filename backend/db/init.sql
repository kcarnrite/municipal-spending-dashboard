CREATE DATABASE IF NOT EXISTS MunicipalDashboard;

USE MunicipalDashboard;

CREATE TABLE Municipalities(
    id SMALLINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    population INT,
    tier CHAR(2),
    PRIMARY KEY (id));

CREATE TABLE Categories(
	line_number SMALLINT NOT NULL,
	category VARCHAR(100) NOT NULL,
	PRIMARY KEY (line_number));


CREATE TABLE ExpenseData(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
c_id SMALLINT NOT NULL,
m_id SMALLINT NOT NULL,
`year` YEAR NOT NULL,
wages BIGINT NOT NULL,
interest BIGINT NOT NULL,
materials BIGINT NOT NULL,
contracted_services BIGINT NOT NULL,
rents_fin_expenses BIGINT NOT NULL,
external_transfers BIGINT NOT NULL,
amortization BIGINT NOT NULL,
total_before_adjustments BIGINT NOT NULL,
total_expenses BIGINT NOT NULL,
adjustments BIGINT NOT NULL,
program_support BIGINT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (c_id) REFERENCES Categories (line_number),
FOREIGN KEY (m_id) REFERENCES Municipalities (id)
);