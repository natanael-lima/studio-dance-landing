# Dance Studio Landing Page # React + TypeScript + Vite

Este template proporciona una configuración mínima para iniciar un proyecto de React con Vite, incluyendo Hot Module Replacement (HMR) y algunas reglas básicas de ESLint.

Actualmente, están disponibles dos plugins oficiales:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): Utiliza [Babel](https://babeljs.io/) para la actualización rápida.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): Utiliza [SWC](https://swc.rs/) para la actualización rápida.

## Configuración de ESLint

Si estás desarrollando una aplicación para producción, te recomendamos actualizar la configuración para habilitar reglas de linting basadas en tipos:

- Configura la propiedad `parserOptions` en el nivel superior de esta manera:

  ```js
  export default tseslint.config({
    languageOptions: {
      // otras opciones...
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  });
  ```

- Reemplaza `tseslint.configs.recommended` con `tseslint.configs.recommendedTypeChecked` o `tseslint.configs.strictTypeChecked`
- Opcionalmente, añade `...tseslint.configs.stylisticTypeChecked`
- Instala [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) y actualiza la configuración:

  ```js
  // eslint.config.js
  import react from "eslint-plugin-react";

  export default tseslint.config({
    // Configura la versión de React
    settings: { react: { version: "18.3" } },
    plugins: {
      // Añade el plugin de React
      react,
    },
    rules: {
      // otras reglas...
      // Habilita las reglas recomendadas
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
    },
  });
  ```

## Uso de Tailwind CSS

Para añadir Tailwind CSS a tu proyecto, sigue estos pasos:

1. **Instalar Tailwind CSS y sus dependencias:**

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. **Configurar Tailwind en tu proyecto:**

   Añade el siguiente contenido a tu archivo `tailwind.config.js`:

   ```js
   /** @type {import('tailwindcss').Config} */
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. **Incluir Tailwind en tus archivos CSS:**

   Añade las directivas de Tailwind a tu archivo CSS principal (por ejemplo, `index.css`):

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Configurar Vite para usar Tailwind CSS:**

   Asegúrate de que Vite esté configurado para procesar tu archivo CSS. Tu archivo `vite.config.ts` no necesita cambios adicionales si solo estás agregando Tailwind CSS.

Con estas configuraciones, tu proyecto estará listo para desarrollar una landing page atractiva para un estudio de danza, utilizando la potencia de React, TypeScript, Vite y Tailwind CSS.
