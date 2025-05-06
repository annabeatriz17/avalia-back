const pool = require("../config/database");

const getAllAnimals = async () => {
    const result = await pool.query("SELECT * FROM animals");
    return result.rows;
};

const getAnimalById = async (id) => {
    const result = await pool.query("SELECT * FROM animals WHERE id = $1", [id]);
    return result.rows[0];
};

const createAnimal = async (name, pesoReal, photo) => {
    const result = await pool.query("INSERT INTO animals (name, peso_real, photo) VALUES ($1, $2, $3) RETURNING *", [name, pesoReal, photo]);
    return result.rows[0];
};

const updateAnimal = async (id, name, pesoReal) => {
    const result = await pool.query("UPDATE animals SET name = $1, peso_real = $2 WHERE id = $3 RETURNING *", [name, pesoReal, id]
    );
    if (result.rowCount === 0) {
        return { error: "Animal não encontrado" };
    }
    return result.rows[0];
};

const deleteAnimal = async (id) => {
    const result = await pool.query("DELETE FROM animals WHERE id = $1 RETURNING *", [id]
    );
    if (result.rowCount === 0) {
        return { error: "Não foi possível deletar o animal" };
    }
    return { message: "Animal deletado com sucesso" };
};

module.exports = { getAllAnimals, getAnimalById, createAnimal, updateAnimal, deleteAnimal };
