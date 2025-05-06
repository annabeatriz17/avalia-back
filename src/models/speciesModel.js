const pool = require("../config/database");

const getAllSpecies = async () => {
        const result = await pool.query(
            "SELECT * FROM species"
        );
        return result.rows;
};

const getSpeciesById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM species WHERE id = $1", [id]
    );
    return result.rows[0];
};

const createSpecies = async (race, description, animal_id) => {
    const result = await pool.query("INSERT INTO species (race, description, animals_id) VALUES ($1, $2, $3) RETURNING *",
        [race, description, animal_id]);
    return result.rows[0];
};

const updateSpecies = async (id, race, description, animal_id) => {
    const result = await pool.query("UPDATE species SET race = $1, description = $2, animals_id = $3 WHERE id = $4 RETURNING *",
        [race, description, animal_id, id]);
    if (result.rowCount === 0) {
        return { error: "Espécie não encontrada" };
    }
    return result.rows[0];
};

const deleteSpecies = async (id) => {
    const result = await pool.query("DELETE FROM species WHERE id = $1 RETURNING *", [id]);
    if (result.rowCount === 0) {
        return { error: "Não foi possível deletar a espécie" };
    }
    return { message: "Espécie deletada com sucesso" };
};

module.exports = { getAllSpecies, getSpeciesById, createSpecies, updateSpecies, deleteSpecies };