// Importation des modèles nécessaires et des utilitaires
const Chicken = require("../models/chicken");
const Coop = require("../models/coop");
const AppError = require("../utils/AppError");

// Contrôleur pour créer un poulet
exports.createChicken = async (req, res, next) => {
  try {
    // Logique pour vérifier et créer un poulailler si nécessaire
    let coop;
    if (req.body.coopName) {
      coop = await Coop.findOne({ name: req.body.coopName });
      if (!coop) {
        // Si le poulailler n'existe pas, en créer un nouveau avec le nom donné
        coop = await Coop.create({ name: req.body.coopName, capacity: 10 });
        req.body.coop = coop._id; // Assigner l'ID du poulailler au poulet
      }
      delete req.body.coopName; // Supprimer le coopName du corps de la requête
    }

    // Logique pour créer un poulet
    const chicken = await Chicken.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        chicken,
      },
    });
  } catch (error) {
    console.error("Error creating chicken: ", error);
    return next(new AppError("Failed to create chicken.", 500));
  }
};

// Contrôleur pour obtenir tous les poulets
exports.getAllChickens = async (req, res, next) => {
  try {
    const chickens = await Chicken.find().populate("coop");
    res.status(200).json({
      status: "success",
      results: chickens.length,
      data: {
        chickens,
      },
    });
  } catch (error) {
    return next(new AppError("Failed to fetch chickens.", 500));
  }
};

// Contrôleur pour obtenir un poulet spécifique
exports.getChicken = async (req, res, next) => {
  try {
    const chicken = await Chicken.findById(req.params.id).populate("coop");
    if (!chicken) {
      return next(new AppError("Chicken not found.", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        chicken,
      },
    });
  } catch (error) {
    return next(new AppError("Failed to fetch chicken.", 500));
  }
};

// Contrôleur pour mettre à jour un poulet
exports.updateChicken = async (req, res, next) => {
  try {
    const chicken = await Chicken.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!chicken) {
      return next(new AppError("Chicken not found.", 404));
    }
    res.status(200).json({
      status: "success",
      data: {
        chicken,
      },
    });
  } catch (error) {
    return next(new AppError("Failed to update chicken.", 500));
  }
};

// Contrôleur pour supprimer un poulet
exports.deleteChicken = async (req, res, next) => {
  try {
    const chicken = await Chicken.findByIdAndDelete(req.params.id);
    if (!chicken) {
      return next(new AppError("Chicken not found.", 404));
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    return next(new AppError("Failed to delete chicken.", 500));
  }
};

// Contrôleur pour augmenter le nombre de pas d'un poulet
exports.runChicken = async (req, res, next) => {
  try {
    const chicken = await Chicken.findById(req.params.id);
    if (!chicken) {
      return next(new AppError("Chicken not found.", 404));
    }
    chicken.steps += 1;
    await chicken.save();
    res.status(200).json({
      status: "success",
      data: {
        chicken,
      },
    });
  } catch (error) {
    return next(new AppError("Failed to update chicken steps.", 500));
  }
};
