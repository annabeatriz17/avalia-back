const pool = require("../config/database");

const getAllSpecies = async (peso_real) => {
    if (!peso_real) {
        const result = await pool.query(
            "SELECT species.*, animals.name AS animal_name FROM species LEFT JOIN animals ON animals.species_id = species.id"
        );
        return result.rows;
    }else{
        const result = await pool.query(
            "SELECT species.*, animals.name AS animal_name FROM species LEFT JOIN animals ON animals.species_id = species.id WHERE species.peso_real ILIKE $1",
            [`%${peso_real}%`]
        );
        return result.rows;
    }
};

const getSpeciesById = async (id) => {
    const result = await pool.query(
        "SELECT species.*, animals.name AS animal_name FROM species LEFT JOIN animals ON animals.species_id = species.id WHERE species.id = $1",
        [id]
    );
    return result.rows[0];
};

const createSpecies = async (name, animal_id) => {
    const result = await pool.query("INSERT INTO species (name, animals_id) VALUES ($1, $2) RETURNING *", 
        [name, animal_id]);
    return result.rows[0];
};

const updateSpecies = async (id, name, animal_id ) => {
    const result = await pool.query("UPDATE species SET name = $1, animals_id = $2 WHERE id = $3 RETURNING *", [name, animal_id, id]);
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