const AppError = require("../utils/AppError");

const errorHandler = (err, req, res, next) => {
  // Clone l'erreur pour éviter des modifications inattendues
  let error = { ...err };
  error.message = err.message;

  // Log l'erreur pour le développeur
  console.error(err);

  // Gestion des erreurs pour un ID MongoDB non valide
  if (err.name === "CastError") {
    const message = `Resource not found with id of ${err.value}`;
    error = new AppError(message, 404);
  }

  // Gestion des erreurs pour les doublons dans MongoDB
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    error = new AppError(message, 400);
  }

  // Gestion des erreurs de validation de Mongoose
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error = new AppError(message, 400);
  }

  // Envoi de la réponse d'erreur au client
  res.status(error.statusCode || 500).json({
    status: "error",
    message: error.message || "Server Error",
  });
};

module.exports = errorHandler;
