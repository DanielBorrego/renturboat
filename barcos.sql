DROP DATABASE IF EXISTS renturboat;
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
    preu INT NOT NULL,
    eslora FLOAT NOT NULL,
    manga FLOAT NOT NULL,
    calat FLOAT NOT NULL,
    descripcio VARCHAR(1000),
    imatge VARCHAR(255),
    tipus ENUM(
        'No licence',
        'With licence',
        'Sailboat',
        'Yacht'
    )
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

CREATE TABLE temp_registrations(
    id INT AUTO_INCREMENT PRIMARY KEY,
    mail VARCHAR(100) NOT NULL,
    data_json JSON NOT NULL,
    code_hash VARCHAR(255) NOT NULL,
    data_expiracio DATETIME NOT NULL,
    intents INT NOT NULL DEFAULT 0,
    codigo_usado BOOLEAN NOT NULL DEFAULT FALSE,
    creat DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);