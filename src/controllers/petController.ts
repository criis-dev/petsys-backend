// controllers/clinicController.ts
import { prisma } from "../prisma/prisma.config.ts";

export const getClinics = async () => {
  try {
    const clinics = await prisma.clinic.findMany();
    return clinics;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
