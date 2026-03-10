import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Move reactCompiler here, outside of experimental */
  reactCompiler: true,

  experimental: {
    /* Keep other experimental flags here if needed, or leave empty */
  },
};

export default nextConfig;
