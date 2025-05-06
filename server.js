require("dotenv").config();
const express = require("express");
const cors = require("cors");
const animalsRoutes = require("./src/routes/animalsRoutes");
const speciesRoutes = require("./src/routes/speciesRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("api/animals", animalsRoutes);
app.use("api/species", speciesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`😍💕 Servidor rodando em http://localhost:${PORT}`);
});
