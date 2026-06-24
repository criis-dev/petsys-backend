import { Router } from "express";
import { authenticateToken } from "../../middleware/auth.middleware";
import { getOwners, getOwnerById, createOwner, updateOwner, deleteOwner } from "./owner.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Owners
 *   description: Endpoints para gestionar dueños
 */

/**
 * @swagger
 * /owners:
 *   get:
 *     summary: Obtener todos los dueños
 *     tags: [Owners]
 *     responses:
 *       200:
 *         description: Lista de dueños obtenida exitosamente
 */
router.get("/", authenticateToken, getOwners);

/**
 * @swagger
 * /owners/{id}:
 *   get:
 *     summary: Obtener un dueño por ID
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del dueño
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dueño encontrado
 *       404:
 *         description: Dueño no encontrado
 */
router.get("/:id", authenticateToken, getOwnerById);

/**
 * @swagger
 * /owners:
 *   post:
 *     summary: Crear un nuevo dueño
 *     tags: [Owners]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               clinicId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Dueño creado exitosamente
 */
router.post("/", authenticateToken, createOwner);

/**
 * @swagger
 * /owners/{id}:
 *   put:
 *     summary: Actualizar un dueño existente
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del dueño
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               clinicId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Dueño actualizado exitosamente
 */
router.put("/:id", authenticateToken, updateOwner);

/**
 * @swagger
 * /owners/{id}:
 *   delete:
 *     summary: Eliminar un dueño
 *     tags: [Owners]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del dueño
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dueño eliminado exitosamente
 */
router.delete("/:id", authenticateToken, deleteOwner);

export default router;
