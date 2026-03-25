import swaggerJSDoc from "swagger-jsdoc";

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
    apis: ["./src/routes/*.ts"]
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec