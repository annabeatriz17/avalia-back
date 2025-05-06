const express = require("express");
const router = express.Router();
const speciesController = require("../controllers/speciesController");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

router.get("/species", speciesController.getAllSpecies);
router.get("/species/:id", speciesController.getSpeciesById);
router.post("/species", speciesController.createSpecies);
router.put("/species/:id", speciesController.updateSpecies);
router.delete("/species/:id", speciesController.deleteSpecies);

module.exports = router;