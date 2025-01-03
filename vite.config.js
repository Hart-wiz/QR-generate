import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Use the PORT environment variable provided by Render
    host: "0.0.0.0", // Bind to all network interfaces, needed for Render
  },
});
