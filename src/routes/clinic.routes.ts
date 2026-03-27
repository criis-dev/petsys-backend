import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { getClinics, getClinicById, createClinic, updateClinic, deleteClinic } from "../controllers/clinic.controller";
import { validateClinic, validateClinicId, clinicExists } from "../middleware/clinic.middleware";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Clinics
 *   description: Endpoints para gestionar clínicas
 */

/**
 * @swagger
 * /clinics:
 *   get:
 *     summary: Obtener todas las clínicas
 *     tags: [Clinics]
 *     responses:
 *       200:
 *         description: Lista de clínicas obtenida exitosamente
 */
// GET all
router.get("/", authenticateToken, getClinics);

/**
 * @swagger
 * /clinics/{id}:
 *   get:
 *     summary: Obtener una clínica por ID
 *     tags: [Clinics]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la clínica
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Clínica encontrada
 *       404:
 *         description: Clínica no encontrada
 */
// GET by ID
router.get("/:id", authenticateToken, getClinicById);

/**
 * @swagger
 * /clinics:
 *   post:
 *     summary: Crear una nueva clínica
 *     tags: [Clinics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Clínica creada exitosamente
 */
// CREATE
router.post("/", authenticateToken, validateClinic, createClinic);

/**
 * @swagger
 * /clinics/{id}:
 *   put:
 *     summary: Actualizar una clínica existente
 *     tags: [Clinics]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la clínica
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
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Clínica actualizada exitosamente
 */
// UPDATE
router.put("/:id", authenticateToken, validateClinicId, clinicExists, validateClinic, updateClinic);

/**
 * @swagger
 * /clinics/{id}:
 *   delete:
 *     summary: Eliminar una clínica
 *     tags: [Clinics]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la clínica
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Clínica eliminada exitosamente
 */
//  DELETE
router.delete("/:id", authenticateToken, validateClinicId, clinicExists, deleteClinic);

export default router;
