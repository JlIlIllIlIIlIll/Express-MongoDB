// Importation du module 'mongoose' pour la gestion de la base de données MongoDB
const mongoose = require("mongoose");

// Fonction asynchrone pour se connecter à la base de données MongoDB
const connectDB = async () => {
  try {
    // Tentative de connexion à MongoDB en utilisant l'URI fourni dans les variables d'environnement
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true, // Utilisation du nouveau parser d'URL pour éviter les avertissements
      useUnifiedTopology: true, // Utilisation du nouveau moteur de gestion des connexions pour éviter les avertissements
    });

    // Message de confirmation si la connexion est réussie
    console.log("Connected to MongoDB");
  } catch (error) {
    // En cas d'erreur lors de la connexion, afficher l'erreur et quitter le processus avec un code d'erreur '1'
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

// Exportation de la fonction 'connectDB' pour l'utiliser dans d'autres modules
module.exports = connectDB;
