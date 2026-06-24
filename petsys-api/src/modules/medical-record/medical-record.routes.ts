import { Router } from "express";
import { authenticateToken } from "../../middleware/auth.middleware";
import { getMedicalRecords, getMedicalRecordById, createMedicalRecord, updateMedicalRecord, deleteMedicalRecord } from "./medical-record.controller";

const router = Router();

router.get("/", authenticateToken, getMedicalRecords);
router.get("/:id", authenticateToken, getMedicalRecordById);
router.post("/", authenticateToken, createMedicalRecord);
router.put("/:id", authenticateToken, updateMedicalRecord);
router.delete("/:id", authenticateToken, deleteMedicalRecord);

export default router;
