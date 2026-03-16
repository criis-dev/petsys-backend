import { Request, Response } from "express";
// import { prisma } from "../prisma/prismaClient";
import { prisma } from "../prisma/prismaClient";

/**
 * GET /api/pets 
 * Obtener todas las mascotas
 * 
 */
export const getPets = async (req: Request, res: Response) => {

  try {
    const pets = await prisma.pet.findMany();

    res.status(200).json({
      success: true,
      data: pets
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener las mascotas"
    });
  }
};

/**
 * GET /api/pets/:id
 */
export const getPetById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const pet = await prisma.pet.findUnique({
      where: { id }
    });

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Pet not found"
      });
    }

    res.status(200).json({
      success: true,
      data: pet
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching pet"
    });
  }
};

/**
 * POST /api/pets
 */
export const createPet = async (req: Request, res: Response) => {
  try {
    const { name, species, breed, ownerId } = req.body;

    if (!name || !species || !breed || !ownerId) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    const pet = await prisma.pet.create({
      data: {
        name,
        species,
        breed,
        ownerId
      }
    });

    res.status(201).json({
      success: true,
      data: pet
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating pet"
    });
  }
};

/**
 * PUT /api/pets/:id
 */
export const updatePet = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, species, breed, ownerId } = req.body;

    const pet = await prisma.pet.update({
      where: { id },
      data: {
        name,
        species,
        breed,
        ownerId
      }
    });

    res.status(200).json({
      success: true,
      data: pet
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating pet"
    });
  }
};

/**
 * DELETE /api/pets/:id
 */
export const deletePet = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    await prisma.pet.delete({
      where: { id }
    });

    res.status(200).json({
      success: true,
      message: "Pet deleted"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting pet"
    });
  }
};