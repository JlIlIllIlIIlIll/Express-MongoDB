const express = require("express");
const chickenController = require("../controllers/chickenController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Chickens
 *     description: Operations related to chickens.
 */

/**
 * @swagger
 * /chickens:
 *   post:
 *     summary: Create a new chicken
 *     tags: [Chickens]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Chicken'
 *     responses:
 *       201:
 *         description: Chicken created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/chickens", chickenController.createChicken);

/**
 * @swagger
 * /chickens:
 *   get:
 *     summary: Get all chickens
 *     tags: [Chickens]
 *     responses:
 *       200:
 *         description: List of all chickens
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Chicken'
 *       500:
 *         description: Internal server error
 */
router.get("/chickens", chickenController.getAllChickens);

/**
 * @swagger
 * /chickens/{id}:
 *   get:
 *     summary: Get a chicken by ID
 *     tags: [Chickens]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Chicken ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Chicken details
 *       404:
 *         description: Chicken not found
 *       500:
 *         description: Internal server error
 */
router.get("/chickens/:id", chickenController.getChicken);

/**
 * @swagger
 * /chickens/{id}:
 *   put:
 *     summary: Update a chicken by ID
 *     tags: [Chickens]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Chicken ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Chicken'
 *     responses:
 *       200:
 *         description: Chicken updated successfully
 *       404:
 *         description: Chicken not found
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.put("/chickens/:id", chickenController.updateChicken);

/**
 * @swagger
 * /chickens/{id}:
 *   delete:
 *     summary: Delete a chicken by ID
 *     tags: [Chickens]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Chicken ID
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Chicken deleted successfully
 *       404:
 *         description: Chicken not found
 *       500:
 *         description: Internal server error
 */
router.delete("/chickens/:id", chickenController.deleteChicken);

/**
 * @swagger
 * /chickens/run/{id}:
 *   patch:
 *     summary: Make a chicken run (increment its steps)
 *     tags: [Chickens]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Chicken ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Chicken's steps updated successfully
 *       404:
 *         description: Chicken not found
 *       500:
 *         description: Internal server error
 */
router.patch("/chickens/run/:id", chickenController.runChicken);

module.exports = router;
