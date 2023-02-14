!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/index.mjs"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
