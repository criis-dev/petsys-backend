import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.ts";
import petRoutes from "./modules/pet/pet.routes.ts";
import userRoutes from "./modules/user/user.routes.ts";
import ownerRoutes from "./modules/owner/owner.routes.ts";
import clinicRoutes from "./modules/clinic/clinic.routes.ts";
import medicalRecordRoutes from "./modules/medical-record/medical-record.routes.ts";
import appointmentRoutes from "./modules/appointment/appointment.routes.ts";
import productRoutes from "./modules/product/product.routes.ts";
import swaggerUiExpress from "swagger-ui-express";
import swaggerSpec from "./docs/swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/doc", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));

app.get("/", (req, res) => {
    res.send("API Veterinaria funcionando 🐶");
});

app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "vet-api" });
});

app.use("/api/pets", petRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/owners", ownerRoutes);
app.use("/api/clinics", clinicRoutes);
app.use("/api/medical-records", medicalRecordRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/products", productRoutes);

export default app;