import { Request, Response } from "express";
import { prisma } from "../../config/prismaClient";

export const getMedicalRecords = async (req: Request, res: Response) => {
  try {
    const medicalRecords = await prisma.medicalRecord.findMany();
    res.status(200).json({ success: true, data: medicalRecords });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching medical records" });
  }
};

export const getMedicalRecordById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const medicalRecord = await prisma.medicalRecord.findUnique({ where: { id } });
    if (!medicalRecord) return res.status(404).json({ success: false, message: "Medical record not found" });
    res.status(200).json({ success: true, data: medicalRecord });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching medical record" });
  }
};

export const createMedicalRecord = async (req: Request, res: Response) => {
  try {
    const { petId, diagnosis, treatment, notes, visitDate } = req.body;
    const medicalRecord = await prisma.medicalRecord.create({
      data: { petId, diagnosis, treatment, notes, visitDate }
    });
    res.status(201).json({ success: true, data: medicalRecord });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating medical record" });
  }
};

export const updateMedicalRecord = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { petId, diagnosis, treatment, notes, visitDate } = req.body;
    const medicalRecord = await prisma.medicalRecord.update({
      where: { id },
      data: { petId, diagnosis, treatment, notes, visitDate }
    });
    res.status(200).json({ success: true, data: medicalRecord });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating medical record" });
  }
};

export const deleteMedicalRecord = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.medicalRecord.delete({ where: { id } });
    res.status(200).json({ success: true, message: "Medical record deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting medical record" });
  }
};
