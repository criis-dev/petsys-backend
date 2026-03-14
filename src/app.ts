import express from "express";
import cors from "cors";
import petRoutes from "./routes/pet.routes.ts";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Veterinaria funcionando 🐶");
});

app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "vet-api" });
});

app.use("/api/pets", petRoutes);

export default app;