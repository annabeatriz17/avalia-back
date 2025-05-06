CREATE DATABASE avalia;

\c avalia;

CREATE TABLE animals (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    peso_real VARCHAR(100) NOT NULL
);

CREATE TABLE species (
    id SERIAL PRIMARY KEY,
    race VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    animals_id INTEGER REFERENCES animals(id) ON DELETE SET NULL
);

INSERT INTO animals (name, peso_real) VALUES
    ('Belinha', '4kg'),
    ('Luna', '5kg'),
    ('Estrela', '4.5kg'),
    ('Tobias', '4kg'),
    ('Chunica', '5kg'),
    ('Thor', '34kg'),
    ('Pedrita', '9kg'),
    ('Charmosa', '30kg'),
    ('Bob', '3kg');

INSERT INTO species (race, description, animals_id) VALUES
    ('Siamês', 'Dócil e fértil', 1),
    ('Persa', 'Dócil e fértil', 2),
    ('Tonquinês', 'Nada amigavel', 3),
    ('Mist australiano', 'Dócil e castrado', 4),
    ('Balinês', 'Dócil e castrado', 5),
    ('Golden retriever', 'amigo de todos e castrado', 6),
    ('Beagle', 'Amigo de todos, castrado e para brincar morde', 7),
    ('Poodle', 'Não é amigavel, fertil', 8),
    ('Pinscher', 'Não é amigavel, SE AFASTE', 9);