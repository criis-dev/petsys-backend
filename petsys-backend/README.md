# 🐾 Petsys Backend - API Veterinaria

Este es el backend del sistema de gestión veterinaria **Petsys**, diseñado para administrar clínicas, usuarios (veterinarios, administradores), dueños de mascotas, historiales médicos, citas y productos.

---

## 🛠️ Stack Tecnológico

El proyecto está construido con un stack moderno, seguro y eficiente:

### Core & Lenguaje
*   **[Node.js](https://nodejs.org/)** (v20+) - Entorno de ejecución para JavaScript.
*   **[TypeScript](https://www.typescriptlang.org/)** (v5.9) - Superset de JavaScript que añade tipado estático para mayor robustez y mantenibilidad.

### Framework Web & API
*   **[Express.js](https://expressjs.com/)** (v5.2) - Framework web minimalista para construir APIs REST de manera ágil y escalable.

### Base de Datos & ORM
*   **[PostgreSQL](https://www.postgresql.org/)** - Sistema de base de datos relacional robusto y altamente escalable.
*   **[Prisma ORM](https://www.prisma.io/)** (v5.22) - Modelado de datos simplificado, migraciones automáticas y cliente type-safe.

### Seguridad & Autenticación
*   **[JSON Web Tokens (JWT)](https://jwt.io/)** - Autenticación segura basada en tokens.
*   **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)** - Encriptación de contraseñas mediante hashing seguro.
*   **[CORS](https://github.com/expressjs/cors)** - Control de acceso de HTTP (Cross-Origin Resource Sharing).

### Herramientas de Desarrollo y Documentación
*   **[Swagger / OpenAPI](https://swagger.io/)** (`swagger-ui-express` y `swagger-jsdoc`) - Documentación interactiva de la API accesible en la ruta `/doc`.
*   **[tsx](https://github.com/privatenumber/tsx)** - Ejecutor rápido de TypeScript con recarga en caliente para desarrollo local.
*   **dotenv** - Gestión segura de variables de entorno.

---

## 🚀 Inicio Rápido

### Requisitos Previos
*   **Node.js** (versión LTS recomendada).
*   **PostgreSQL** (instalado localmente o ejecutándose mediante un contenedor Docker).

### 1. Clonar e Instalar Dependencias
Instala los paquetes necesarios definidos en el [`package.json`](file:///home/inweb/Inweb/vet_app/petsys-backend/package.json):
```bash
npm install
```

### 2. Configurar Variables de Env
Crea un archivo `.env` en la raíz del proyecto configurando tus credenciales de PostgreSQL:
```env
DATABASE_URL="postgresql://USUARIO:CONTRASEÑA@localhost:5432/petsys_db?schema=public"
PORT=3000
JWT_SECRET="tu_secreto_super_seguro"
```

### 3. Migrar la Base de Datos
Ejecuta las migraciones de Prisma para sincronizar el esquema con tu base de datos:
```bash
npx prisma migrate dev
```

### 4. Iniciar el Servidor de Desarrollo
Levanta la aplicación en modo de desarrollo con recarga automática:
```bash
npm run dev
```
La API estará disponible en `http://localhost:3000`.

---

## 📁 Estructura del Proyecto

La arquitectura sigue una organización modular:

*   [`prisma/`](file:///home/inweb/Inweb/vet_app/petsys-backend/prisma)
    *   [`schema.prisma`](file:///home/inweb/Inweb/vet_app/petsys-backend/prisma/schema.prisma): Definición del esquema de la base de datos PostgreSQL y relaciones.
*   [`src/`](file:///home/inweb/Inweb/vet_app/petsys-backend/src)
    *   [`config/`](file:///home/inweb/Inweb/vet_app/petsys-backend/src/config): Configuración del cliente de Prisma y otras variables globales.
    *   [`docs/`](file:///home/inweb/Inweb/vet_app/petsys-backend/src/docs): Configuración de Swagger para la documentación autogenerada de los endpoints.
    *   [`middleware/`](file:///home/inweb/Inweb/vet_app/petsys-backend/src/middleware): Middlewares para validación de tokens JWT y control de accesos.
    *   [`modules/`](file:///home/inweb/Inweb/vet_app/petsys-backend/src/modules): Módulos funcionales organizados por dominio:
        *   `auth/` - Registro, login e inicio de sesión.
        *   `clinic/` - Administración de clínicas.
        *   `user/` - Gestión de personal/usuarios.
        *   `owner/` - Información de los dueños de mascotas.
        *   `pet/` - Ficha de mascotas.
        *   `medical-record/` - Historiales médicos.
        *   `appointment/` - Gestión de citas.
        *   `product/` - Inventario y productos.
    *   [`app.ts`](file:///home/inweb/Inweb/vet_app/petsys-backend/src/app.ts): Configuración principal de Express y enrutamiento global.
    *   [`server.ts`](file:///home/inweb/Inweb/vet_app/petsys-backend/src/server.ts): Punto de entrada para arrancar el servidor.

---

## 📖 Documentación de la API
Una vez que el servidor esté corriendo, puedes acceder a la interfaz interactiva de Swagger en:
🔗 **`http://localhost:3000/doc`**