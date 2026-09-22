import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The vault's images are reached through a symlink in public/.
  outputFileTracingIncludes: { "/**": ["./public/vault/**"] },
};

export default nextConfig;
