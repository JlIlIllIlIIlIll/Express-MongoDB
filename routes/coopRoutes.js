const express = require("express");
const coopController = require("../controllers/coopController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Coop
 *     description: Operations related to coops.
 */

/**
 * @swagger
 * /coops:
 *   post:
 *     summary: Create a new coop
 *     tags: [Coop]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Coop'
 *     responses:
 *       201:
 *         description: Coop successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coop'
 */
router.post("/coops", coopController.createCoop);

/**
 * @swagger
 * /coops:
 *   get:
 *     summary: Get all coops
 *     tags: [Coop]
 *     responses:
 *       200:
 *         description: List of all coops
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coop'
 */
router.get("/coops", coopController.getAllCoops);

/**
 * @swagger
 * /coops/{id}:
 *   get:
 *     summary: Get a specific coop by ID
 *     tags: [Coop]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the coop to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Details of the coop
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Coop'
 *       404:
 *         description: Coop not found
 */
router.get("/coops/:id", coopController.getCoop);

/**
 * @swagger
 * /coops/{id}:
 *   put:
 *     summary: Update a specific coop by ID
 *     tags: [Coop]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the coop to update
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Coop'
 *     responses:
 *       200:
 *         description: Coop updated successfully
 *       404:
 *         description: Coop not found
 *       500:
 *         description: Internal server error
 */
router.put("/coops/:id", coopController.updateCoop);

/**
 * @swagger
 * /coops/{id}:
 *   delete:
 *     summary: Delete a specific coop by ID
 *     tags: [Coop]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the coop to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Coop deleted successfully
 *       404:
 *         description: Coop not found
 *       500:
 *         description: Internal server error
 */
router.delete("/coops/:id", coopController.deleteCoop);

module.exports = router;
