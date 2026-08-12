import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { prisma } from "./src/config/prismaClient.ts";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Servidor veterinaria funcionando ✅");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
