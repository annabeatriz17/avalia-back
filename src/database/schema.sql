CREATE DATABASE avalia;

\c avalia;

CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    peso_real INTEGER NOT NULL
);

CREATE TABLE species (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    animals_id INTEGER REFERENCES animals(id) ON DELETE SET NULL
);

INSERT INTO animals (name, peso_real) VALUES 
    ('Gato', 20),
    ('Cachorro', 20);

INSERT INTO species (name, animals_id) VALUES
    ('Pastor-Alemão', 2),
    ('Beagle', 2),
    ('Buldogue', 2 ),
    ('Golden retriever', 2),
    ('Husky siberiano', 2),
    ('Siamês', 1),
    ('Persa', 1),
    ('Maine Coon', 1),
    ('Ragdoll', 1),
    ('Sphynx', 1);