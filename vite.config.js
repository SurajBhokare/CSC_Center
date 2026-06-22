import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "CSC Connect",
        short_name: "CSC",

        description:
          "Digital CSC Service Portal",

        theme_color: "#3b82f6",

        background_color: "#0f172a",

        display: "standalone",

        start_url: "/",

        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png"
          },

          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    })
  ]
});