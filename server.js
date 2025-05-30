require("dotenv").config();
const express = require("express");
const cors = require("cors");
const animalsRoutes = require("./src/routes/animalsRoutes");
const speciesRoutes = require("./src/routes/speciesRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", animalsRoutes);
app.use("/api", speciesRoutes);
app.use("/api", reportRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`😍💕 Servidor rodando em http://localhost:${PORT}`);
});
