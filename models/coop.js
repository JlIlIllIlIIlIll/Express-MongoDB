const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Coop:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: L'ID auto-généré du poulailler.
 *         name:
 *           type: string
 *           description: Le nom du poulailler.
 *           minLength: 2
 *           maxLength: 50
 *         location:
 *           type: string
 *           description: L'emplacement du poulailler.
 *           minLength: 2
 *           maxLength: 50
 *         capacity:
 *           type: number
 *           description: La capacité du poulailler en nombre de poules.
 *           minimum: 0
 *       required:
 *         - name
 *       example:
 *         name: "Cluckington Coop"
 *         location: "Cluckington Hills"
 *         capacity: 100
 */

const coopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 50,
  },
  location: {
    type: String,
    minlength: 2,
    maxlength: 50,
  },
  capacity: {
    type: Number,
    min: 0,
  },
});

coopSchema.virtual("chickens", {
  ref: "Chicken",
  localField: "_id",
  foreignField: "coop",
  justOne: false,
});

coopSchema.set("toObject", { virtuals: true });
coopSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

const Coop = mongoose.model("Coop", coopSchema);

module.exports = Coop;
