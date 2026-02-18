CREATE DATABASE IF NOT EXISTS renturboat;
USE renturboat;

CREATE TABLE barcos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    any_construccio INT NOT NULL,
    capacitat INT NOT NULL,
    titulacio ENUM(
        'Llicencia de navegacio',
        'PNB',
        'PER',
        'Patro de Yate'
    ) NOT NULL,
    preu INT NOT NULL
);

CREATE TABLE client (
    DNI VARCHAR(9) PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    cognoms VARCHAR(100) NOT NULL,
    data_naixement DATE,
    telefon VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    contrasenya VARCHAR(100),
    adreca VARCHAR(200),
    poblacio VARCHAR(100),
    codi_postal VARCHAR(10)
);

CREATE TABLE empleat (
    DNI VARCHAR(9) PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    cognoms VARCHAR(100) NOT NULL,
    data_naixement DATE,
    telefon VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    contrasenya VARCHAR(100),
    adreca VARCHAR(200),
    poblacio VARCHAR(100),
    codi_postal VARCHAR(10)
);

CREATE TABLE reserva (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_dni VARCHAR(9) NOT NULL,
    barco_id INT NOT NULL,
    data_inici DATE,
    data_fi DATE,
    FOREIGN KEY (client_dni) REFERENCES client(DNI),
    FOREIGN KEY (barco_id) REFERENCES barcos(id)
);

CREATE TABLE resenya (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comentari VARCHAR(1000) NOT NULL,
    client_dni VARCHAR(9) NOT NULL,
    barco_id INT NOT NULL,
    puntuacio INT,
    FOREIGN KEY (client_dni) REFERENCES client(DNI),
    FOREIGN KEY (barco_id) REFERENCES barcos(id)
);
