import { Request, Response } from "express";
import { prisma } from "../../config/prismaClient";

export const getOwners = async (req: Request, res: Response) => {
  try {
    const owners = await prisma.owner.findMany();
    res.status(200).json({ success: true, data: owners });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching owners" });
  }
};

export const getOwnerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const owner = await prisma.owner.findUnique({ where: { id } });
    if (!owner) return res.status(404).json({ success: false, message: "Owner not found" });
    res.status(200).json({ success: true, data: owner });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching owner" });
  }
};

export const createOwner = async (req: Request, res: Response) => {
  try {
    const { name, phone, email, clinicId } = req.body;
    const owner = await prisma.owner.create({ data: { name, phone, email, clinicId } });
    res.status(201).json({ success: true, data: owner });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating owner" });
  }
};

export const updateOwner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, phone, email, clinicId } = req.body;
    const owner = await prisma.owner.update({ where: { id }, data: { name, phone, email, clinicId } });
    res.status(200).json({ success: true, data: owner });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating owner" });
  }
};

export const deleteOwner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.owner.delete({ where: { id } });
    res.status(200).json({ success: true, message: "Owner deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting owner" });
  }
};
