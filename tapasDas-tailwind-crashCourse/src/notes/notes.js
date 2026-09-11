{
  /**
   * To install tailwind
   * npm install -D tailwindcss postcss autoprefixer
   * postCss - transpile tailwind to normal css
   * tailwind.config.js
   * post.config.js
   *
   * npx tailwindcss init -p
   */
}

{
  /**
   * npx vs npm
   * npx
   * - node package manager theke locally file install korbe would not execute things related to those file
   */
}

{
  /**
   * initialize tailwind with these commands
   * npm install tailwindcss @tailwindcss/vite
   * got to vite.config.js and add these
   *  {

        import react from "@vitejs/plugin-react";
        import { defineConfig } from "vite";
        import tailwindcss from "@tailwindcs /vite"; <

        // https://vite.dev/config/
        export default defineConfig({
        plugins: [react(), tailwindcss()], <
      
        });
      }
   * Then @import "tailwindcss"; on index.css
   */
}
