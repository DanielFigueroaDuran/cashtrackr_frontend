import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // 🚨 Esto desactiva el error en el build (pero mantiene el chequeo en dev si usás el editor)
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
