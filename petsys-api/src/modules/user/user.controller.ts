import { Request, Response } from "express";
import { prisma } from "../../config/prismaClient";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching users" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching user" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role, clinicId } = req.body;
    const user = await prisma.user.create({ data: { name, email, password, role, clinicId } });
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating user" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, role, clinicId } = req.body;
    const user = await prisma.user.update({ where: { id }, data: { name, email, password, role, clinicId } });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating user" });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id } });
    res.status(200).json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting user" });
  }
};
