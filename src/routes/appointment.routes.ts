import { Router } from "express";
import { authenticateToken } from "../middleware/auth.middleware";
import { getAppointments, getAppointmentById, createAppointment, updateAppointment, deleteAppointment } from "../controllers/appointment.controller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Appointments
 *   description: Endpoints para gestionar citas
 */

/**
 * @swagger
 * /appointments:
 *   get:
 *     summary: Obtener todas las citas
 *     tags: [Appointments]
 *     responses:
 *       200:
 *         description: Lista de citas obtenida exitosamente
 */
router.get("/", authenticateToken, getAppointments);

/**
 * @swagger
 * /appointments/{id}:
 *   get:
 *     summary: Obtener una cita por ID
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la cita
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cita encontrada
 *       404:
 *         description: Cita no encontrada
 */
router.get("/:id", authenticateToken, getAppointmentById);

/**
 * @swagger
 * /appointments:
 *   post:
 *     summary: Crear una nueva cita
 *     tags: [Appointments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               petId:
 *                 type: string
 *               vetId:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cita creada exitosamente
 */
router.post("/", authenticateToken, createAppointment);

/**
 * @swagger
 * /appointments/{id}:
 *   put:
 *     summary: Actualizar una cita existente
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la cita
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               petId:
 *                 type: string
 *               vetId:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cita actualizada exitosamente
 */
router.put("/:id", authenticateToken, updateAppointment);

/**
 * @swagger
 * /appointments/{id}:
 *   delete:
 *     summary: Eliminar una cita
 *     tags: [Appointments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la cita
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cita eliminada exitosamente
 */
router.delete("/:id", authenticateToken, deleteAppointment);

export default router;
