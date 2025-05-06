const animalsModel = require("../models/animalsModel");

const getAllAnimals = async (req, res) => {
    try {
        const animals = await animalsModel.getAllAnimals();
        res.jsonnt(animals);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar animais" });
    }
};

const getAnimalById = async (req, res) => {
    try {
        const animal = await animalsModel.getAnimalById(req.params.id);
        if (!animal) {
            return res.status(404).json({ error: "Animal não encontrado" });
        }
        res.json(animal);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar animal" });
    }
};

const createAnimal = async (req, res) => {
    try {
        const { name, peso_real } = req.body;
        const newAnimal = await animalsModel.createAnimal(name, peso_real);
        res.status(201).json(newAnimal);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar animal" });
    }
};

const updateAnimal = async (req, res) => {
    try {
        const { name, peso_real } = req.body;
        const updatedAnimal = await animalsModel.updateAnimal( req.params.id, name, peso_real);
        if (!updatedAnimal) {
            return res.status(404).json({ message: "Animal não encontrado" });
        }
        res.json(updatedAnimal);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar animal" });
    }
};

const deleteAnimal = async (req, res) => {
    try {
        const message = await animalsModel.deleteAnimal(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar animal" });
    }
};

module.exports = { getAllAnimals, getAnimalById, createAnimal, updateAnimal, deleteAnimal };