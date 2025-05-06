require("dotenv").config();
const express = require("express");
const cors = require("cors");
const animalsRoutes = require("./src/routes/animalsRoutes");
const speciesRoutes = require("./src/routes/speciesRoutes");
const setupSwagger = require("./src/config/swagger");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app);

app.use("api/animals", animalsRoutes);
app.use("api/species", speciesRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`😍💕 Servidor rodando em http://localhost:${PORT}`);
});
