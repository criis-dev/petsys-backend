import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import {
    getPets
    , getPetById
    , createPet
    , updatePet
    , deletePet
} from "../controllers/pet.controller";

const router = Router();

/**
 * @swagger
 * /pets:
 *   get:
 *     summary: Obtener Mascotas por ID
 *     tags: [Pets]
 *     responses:
 *       200:
 *         description: Mascotas encontrado
 *       404:
 *         description: Mascotas no encontrado
 */

router.get("/", authenticateToken, getPets);

/**
 * @swagger
 * /pets/{id}:
 *   get:
 *     summary: Obtener Mascotas por ID
 *     tags: [Pets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del Mascotas
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mascotas encontrado
 *       404:
 *         description: Mascotas no encontrado
 */
router.get("/:id", authenticateToken, getPetById);

/**
 * @swagger
 * /pets:
 *   post:
 *     summary: Crear usuario
 *     tags: [Pets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post("/", authenticateToken, createPet);
router.put("/:id", authenticateToken, updatePet);
router.delete("/:id", authenticateToken, deletePet);

export default router;
