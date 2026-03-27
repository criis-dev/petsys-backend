import { Request, Response } from "express";
import { prisma } from "../../config/prismaClient";

export const getClinics = async (req: Request, res: Response) => {
  try {
    const clinics = await prisma.clinic.findMany();

    res.status(200).json({
      success: true,
      data: clinics
    });
  } catch (error) {

    console.error("ERROR GET CLINICS:", error);

    res.status(500).json({
      success: false,
      message: "Error fetching clinics",
      error: String(error)
    });
  }
};

export const getClinicById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const clinic = await prisma.clinic.findUnique({ where: { id } });
    if (!clinic) return res.status(404).json({ success: false, message: "Clinic not found" });
    res.status(200).json({ success: true, data: clinic });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching clinic" });
  }
};

export const createClinic = async (req: Request, res: Response) => {
  try {
    const { name, address, phone } = req.body;
    const clinic = await prisma.clinic.create({ data: { name, address, phone } });
    res.status(201).json({ success: true, data: clinic });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating clinic" });
  }
};

export const updateClinic = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, address, phone } = req.body;
    const clinic = await prisma.clinic.update({ where: { id }, data: { name, address, phone } });
    res.status(200).json({ success: true, data: clinic });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating clinic" });
  }
};

export const deleteClinic = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.clinic.delete({ where: { id } });
    res.status(200).json({ success: true, message: "Clinic deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting clinic" });
  }
};
