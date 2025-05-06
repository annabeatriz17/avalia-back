const express = require("express");
const router = express.Router();
const animalsController = require("../controllers/animalsController");
const upload = require("../config/upload");


router.get("/animals", animalsController.getAllAnimals);
router.get("/animals/:id", animalsController.getAnimalById);
router.post("/animals",  upload.single("photo"), animalsController.createAnimal);
router.put("/animals/:id", animalsController.updateAnimal);
router.delete("/animals/:id", animalsController.deleteAnimal);

module.exports = router;