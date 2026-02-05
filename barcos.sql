CREATE TYPE AS TITULACIO_TIPUS AS ENUM (
    'Llcencia de navegacio',
    'PNB',
    'PER',
    'Patro de Yate'
);
CREATE TYPE usuari AS (
    DNI VARCHAR(9),
    nom VARCHAR(100),
    cognoms VARCHAR(100),
    data_naixement DATE,
    telefon VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    contrasenya VARCHAR(100),
    adreca VARCHAR(200),
    poblacio VARCHAR(100),
    codi_postal VARCHAR(10)
);
CREATE TABLE barcos (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    MODEL VARCHAR(100) NOT NULL,
    any_construccio INT NOT NULL,
    capacitat INT NOT NULL,
    TITULACIO TITULACIO_TIPUS NOT NULL,
    Preu INT NOT NULL
);

CREATE TABLE client OF usuari;
ADD PRIMARY KEY (DNI) TO client;

CREATE TABLE empleat OF usuari;
ADD PRIMARY KEY (DNI) TO empleat;

CREATE TABLE resreva (
    id INT PRIMARY KEY,
    client_reservat FOREIGN KEY (DNI) REFERENCES client,
    barca_reservada FOREIGN KEY (id) REFERENCES barco
);

CREATE TABLE resenya (
    id SERIAL PRIMARY KEY,
    comentari VARCHAR(200) NOT NULL,
    client FOREIGN KEY(DNI) REFERENCES client,
    barca FOREIGN KEY(id) REFERENCES barca
);