// Importation des modèles nécessaires et des utilitaires
const Coop = require("../models/coop");
const AppError = require("../utils/AppError");

// Contrôleur pour créer un poulailler
exports.createCoop = async (req, res, next) => {
  try {
    const coop = await Coop.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        coop,
      },
    });
  } catch (error) {
    return next(new AppError("Failed to create coop.", 500));
  }
};

// Contrôleur pour obtenir tous les poulaillers
exports.getAllCoops = async (req, res, next) => {
  try {
    const coops = await Coop.find();
    res.status(200).json({
      status: "success",
      results: coops.length,
      data: {
        coops,
      },
    });
  } catch (error) {
    return next(new AppError("Failed to fetch coops.", 500));
  }
};

// Contrôleur pour obtenir un poulailler spécifique
exports.getCoop = async (req, res, next) => {
  try {
    const coop = await Coop.findById(req.params.id).populate("chickens");
    if (!coop) {
      return next(new AppError("Coop not found.", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        coop,
      },
    });
  } catch (error) {
    return next(new AppError("Failed to fetch coop.", 500));
  }
};

// Contrôleur pour mettre à jour un poulailler
exports.updateCoop = async (req, res, next) => {
  try {
    const coop = await Coop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!coop) {
      return next(new AppError("Coop not found.", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        coop,
      },
    });
  } catch (error) {
    return next(new AppError("Failed to update coop.", 500));
  }
};

// Contrôleur pour supprimer un poulailler
exports.deleteCoop = async (req, res, next) => {
  try {
    const coop = await Coop.findByIdAndDelete(req.params.id);
    if (!coop) {
      return next(new AppError("Coop not found.", 404));
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    return next(new AppError("Failed to delete coop.", 500));
  }
};
