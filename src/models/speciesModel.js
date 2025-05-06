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
    const result = await pool.query("INSERT INTO species (name, animals_id) VALUES ($1, $2) RETURNING *", [name, animal_id]);
    return result.rows[0];
};