const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");
const apiKeyMiddleware = require("../config/apiKey");

router.use(apiKeyMiddleware);

router.get("/report/csv", reportController.exportAnimalsCSV);
router.get("/report/pdf", reportController.exportAnimalsPDF);

module.exports = router;