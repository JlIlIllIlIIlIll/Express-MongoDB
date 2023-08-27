// Importation du module 'dotenv' pour charger les variables d'environnement du fichier .env
require("dotenv").config();

// Importation des modules nécessaires
const express = require("express");
const connectDB = require("./config/database");
const globalMiddlewares = require("./middlewares/globalMiddlewares");
const errorHandler = require("./middlewares/errorHandler");
const swaggerConfig = require("./config/swaggerConfig");
const chickenRoutes = require("./routes/chickenRoutes");
const coopRoutes = require("./routes/coopRoutes");

// Initialisation de l'application Express
const app = express();

// Connexion à la base de données
connectDB();

// Utilisation des middlewares globaux
app.use(globalMiddlewares);

// Utilisation des routes
app.use(chickenRoutes);
app.use(coopRoutes);

// Utilisation du middleware de gestion d'erreurs
app.use(errorHandler);

// Configuration Swagger pour la documentation de l'API
app.use("/api-docs", swaggerConfig.serve);
app.get("/api-docs", swaggerConfig.setup);

// Routes de niveau supérieur ou routes génériques
app.get("/", (req, res) => {
  res.send("Welcome to the Chicken Coop API!");
});

// Définition du port d'écoute du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Exportation de l'application pour les tests
