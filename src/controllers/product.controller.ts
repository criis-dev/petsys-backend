import { Request, Response } from "express";
import { prisma } from "../prisma/prismaClient";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching products" });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching product" });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, stock, clinicId } = req.body;
    const product = await prisma.product.create({
      data: { name, price, stock, clinicId }
    });
    res.status(201).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating product" });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, stock, clinicId } = req.body;
    const product = await prisma.product.update({
      where: { id },
      data: { name, price, stock, clinicId }
    });
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating product" });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.product.delete({ where: { id } });
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting product" });
  }
};
