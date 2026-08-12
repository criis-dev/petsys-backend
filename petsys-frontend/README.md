# PetSys Frontend 🐾

Este es el frontend de la aplicación **PetSys** (Vet App), desarrollado con tecnologías modernas y de alto rendimiento para ofrecer una interfaz fluida e interactiva.

---

## 🛠️ Stack Tecnológico

El proyecto está construido sobre el siguiente conjunto de tecnologías:

*   **[React](https://react.dev/) (v19.2)**: Biblioteca principal para la construcción de interfaces de usuario interactivas mediante componentes reutilizables.
*   **[TypeScript](https://www.typescriptlang.org/) (v6.0)**: Superconjunto de JavaScript que añade tipado estático estricto para garantizar la robustez del código y un autocompletado excelente.
*   **[Vite](https://vite.dev/) (v8.2)**: Herramienta de construcción y servidor de desarrollo ultrarrápido con Hot Module Replacement (HMR) instantáneo.
*   **Vanilla CSS**: Estilos puros y modulares definidos en hojas de estilo personalizadas para un rendimiento óptimo y un control visual total, sin dependencias de frameworks adicionales.
*   **[ESLint](https://eslint.org/) (v10.8)**: Herramienta de análisis estático configurada con reglas para React y TypeScript para mantener un código limpio y consistente.

---

## 📁 Estructura del Proyecto

A continuación se detalla la estructura principal de directorios y archivos:

```text
petsys-frontend/
├── public/                 # Recursos estáticos globales (iconos, fuentes, etc.)
├── src/                    # Código fuente de la aplicación
│   ├── assets/             # Recursos locales (imágenes, logos)
│   ├── App.css             # Estilos de la aplicación
│   ├── App.tsx             # Componente raíz principal
│   ├── index.css           # Estilos globales
│   ├── main.tsx            # Punto de entrada de React / Renderizado en el DOM
├── eslint.config.js        # Configuración de ESLint
├── index.html              # Archivo HTML raíz
├── package.json            # Dependencias del proyecto y scripts
├── tsconfig.json           # Configuración de TypeScript
└── vite.config.ts          # Configuración del empaquetador Vite
```

---

## 🚀 Comandos Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes scripts de npm:

### `npm run dev`
Inicia el servidor de desarrollo local.
Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación en tiempo real.

### `npm run build`
Compila el proyecto utilizando el compilador de TypeScript (`tsc`) y empaqueta los archivos de producción optimizados a través de Vite en la carpeta `dist`.

### `npm run preview`
Sirve de forma local la compilación de producción generada en la carpeta `dist` para realizar pruebas previas al despliegue.

### `npm run lint`
Ejecuta ESLint para analizar el código fuente en busca de advertencias, errores de estilo o problemas potenciales de sintaxis.
