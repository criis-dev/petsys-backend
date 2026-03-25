import { Router } from "express"
import { login } from "../controllers/auth.controller"

const router = Router()

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoints para autenticación
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@veterinaria.com
 *               password:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Sesión iniciada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error en el servidor
 */
router.post("/login", login)

export default router