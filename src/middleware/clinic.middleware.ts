import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prismaClient";

export const validateClinic = (req: Request, res: Response, next: NextFunction) => {

    if (!req.body) {
        return res.status(400).json({
            success: false,
            message: "Body is required",
        });
    }

    // TEST DEBUG
    // console.log("METHOD:", req.method);
    // console.log("BODY:", req.body);
    const { name, address, phone } = req.body;

    if (!name || typeof name !== "string") {
        return res.status(400).json({
            success: false,
            message: "Name is required and mus be a string",
        });
    }

    if (!address || typeof address !== "string") {
        return res.status(400).json({
            success: false,
            message: "Address is required and must be a string",
        });
    }

    if (!phone || typeof phone !== "string") {
        return res.status(400).json({
            success: false,
            message: "Phone is required and must be a string",
        });
    }

    next();
};

export const validateClinicId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
        return res.status(400).json({
            success: false,
            message: "Invalid clinic ID",
        });
    }

    next();
};
export const clinicExists = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    try {
        const clinic = await prisma.clinic.findUnique({ where: { id } });

        if (!clinic) {
            return res.status(404).json({
                success: false,
                message: "Clinic not found",
            });
        }

        // opcional: adjuntar al request
        (req as any).clinic = clinic;

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error validating clinic",
        });
    }
};