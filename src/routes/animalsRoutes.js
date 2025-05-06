const express = require("express");
const router = express.Router();
const animalsController = require("../controllers/animalsController");
const upload = require("../config/upload");

/**
 * @swagger
 * tags:
 *   name: Animals
 *   description: Gerenciamento de animais
 */

/**
 * @swagger
 * /api/animals:
 *   get:
 *     summary: Lista todos os animais
 *     tags: [animals]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por peso
 *     responses:
 *       200:
 *         description: Lista de animais
 */
router.get("/animals", animalsController.getAllAnimals);


/**
 * @swagger
 * /api/animals/{id}:
 *   get:
 *     summary: Busca animais por id
 *     tags: [animals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item encontrado
 *       404:
 *         description: Item não encontrado
 */
router.get("/animals/:id", animalsController.getAnimalById);
/**
 * @swagger
 * /api/animals:
 *   post:
 *     summary: Cria um novo animal
 *     tags: [animals]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               peso_real:
 *                 type: string
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: animal criado com sucesso
 */
router.post("/animals",  upload.single("photo"), animalsController.createAnimal);
router.put("/animals/:id", animalsController.updateAnimal);
router.delete("/animals/:id", animalsController.deleteAnimal);

module.exports = router;