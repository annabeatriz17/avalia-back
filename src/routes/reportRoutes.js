const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");
const apiKeyMiddleware = require("../config/apiKey"); // 🔐

router.use(apiKeyMiddleware); // 🔒 Aplica para todas as rotas abaixo

router.get("/report/pdf", reportController.exportAnimalsPDF);

module.exports = router;