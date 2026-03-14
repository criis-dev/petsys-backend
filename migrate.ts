import { prisma } from "./prisma/prisma.config.ts";

async function main() {
  console.log("Migrando la base de datos usando Prisma 5...");
  await prisma.$connect();
  console.log("Conexión exitosa ✅");
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
