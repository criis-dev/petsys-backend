import swaggerJSDoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

// Crear __filename y __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Pet Sys",
            version: "1.0.0",
            description: "Documentación de mi API con Swagger"
        },
        servers: [
            {
                url: "http://localhost:3000/api",
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        // security: [
        //     {
        //         bearerAuth: []
        //     }
        // ]
    },
    apis: [
        path.join(__dirname, "../modules/**/*.routes.*"),
    ]
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec