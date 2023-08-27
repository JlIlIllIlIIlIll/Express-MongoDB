const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *   schemas:
 *     Chicken:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated ID of the chicken.
 *         name:
 *           type: string
 *           description: The name of the chicken.
 *           minLength: 2
 *           maxLength: 50
 *         birthday:
 *           type: string
 *           format: date
 *           description: The birthday of the chicken.
 *           example: "2023-08-25"
 *         weight:
 *           type: number
 *           description: The weight of the chicken.
 *           minimum: 0
 *         steps:
 *           type: number
 *           description: The number of steps taken by the chicken.
 *           default: 0
 *           minimum: 0
 *         isRunning:
 *           type: boolean
 *           description: Indicates if the chicken is currently running.
 *           default: false
 *         coop:
 *           type: string
 *           description: The ID of the coop the chicken belongs to.
 *       required:
 *         - name
 *         - weight
 *       example:
 *         name: "Cluckington"
 *         birthday: "2023-01-01"
 *         weight: 2.5
 */

const chickenSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    birthday: {
      type: Date,
      max: Date.now,
      get: function (date) {
        return date ? date.toISOString().split("T")[0] : undefined;
      },
    },
    weight: {
      type: Number,
      required: true,
      min: 0,
    },
    steps: {
      type: Number,
      default: 0,
      min: 0,
    },
    isRunning: {
      type: Boolean,
      default: false,
    },
    coop: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coop",
    },
  },
  {
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Chicken = mongoose.model("Chicken", chickenSchema);

module.exports = Chicken;
