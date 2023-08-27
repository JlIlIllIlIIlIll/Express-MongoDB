// Importation des modules nécessaires pour la documentation Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// Options pour la configuration de la documentation Swagger
const options = {
  // Définition de la version OpenAPI utilisée
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Chicken and Coop API", // Titre de l'API
      version: "1.0.0", // Version de l'API
      description: "API to manage chickens and coops", // Description de l'API
    },
    // Liste des serveurs où l'API est déployée
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  // Chemins des fichiers où SwaggerJsdoc peut trouver des annotations pour la documentation
  apis: ["./routes/*.js", "./models/*.js"],
};

// Génération de la documentation Swagger en utilisant les options définies
const specs = swaggerJsdoc(options);

// Exportation des fonctions nécessaires pour servir la documentation Swagger via Express
module.exports = {
  serve: swaggerUi.serve, // Fonction pour servir les fichiers UI de Swagger
  setup: swaggerUi.setup(specs), // Fonction pour configurer l'UI de Swagger avec les spécifications générées
};
