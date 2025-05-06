const speciesModel = require("../models/speciesModel");

const getAllSpecies = async (req, res) => {
    try {
        const { peso_real } = req.query;
        const species = await speciesModel.getAllSpecies(peso_real);
        res.json(species);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar espécies" });
    }
};

const getSpeciesById = async (req, res) => {
    try {
        const species = await speciesModel.getSpeciesById(req.params.id);
        if (!species) {
            return res.status(404).json({ error: "Espécie não encontrada" });
        }
        res.json(species);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar espécie" });
    }
};

const createSpecies = async (req, res) => {
    try {
        const { name, animal_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newSpecies = await speciesModel.createSpecies(name, animal_id, photo);
        res.status(201).json(newSpecies);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar espécie" });
    }
};

const updateSpecies = async (req, res) => {
    try {
        const { name, animal_id } = req.body;
        const updatedSpecies = await speciesModel.updateSpecies(req.params.id, name, animal_id);
        if (!updatedSpecies) {
            res.status(404).json({ message: "Espécie não encontrada" });
        }
        res.json(updatedSpecies);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar espécie" });
    }
};

const deleteSpecies = async (req, res) => {
    try {
        const message = await speciesModel.deleteSpecies(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar espécie" });
    }
};

module.exports = { getAllSpecies, getSpeciesById, createSpecies, updateSpecies, deleteSpecies };