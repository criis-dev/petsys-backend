import { Request, Response } from "express";
import { prisma } from "../../config/prismaClient";

export const getAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await prisma.appointment.findMany();
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching appointments" });
  }
};

export const getAppointmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const appointment = await prisma.appointment.findUnique({ where: { id } });
    if (!appointment) return res.status(404).json({ success: false, message: "Appointment not found" });
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching appointment" });
  }
};

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const { petId, vetId, date, status, notes } = req.body;
    const appointment = await prisma.appointment.create({
      data: { petId, vetId, date, status, notes }
    });
    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating appointment" });
  }
};

export const updateAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { petId, vetId, date, status, notes } = req.body;
    const appointment = await prisma.appointment.update({
      where: { id },
      data: { petId, vetId, date, status, notes }
    });
    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating appointment" });
  }
};

export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.appointment.delete({ where: { id } });
    res.status(200).json({ success: true, message: "Appointment deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting appointment" });
  }
};
