import createNextIntlPlugin from "next-intl/plugin";

// Try to import user config if it exists
let userConfig = {};
try {
  const importedConfig = await import("./v0-user-next.config");
  userConfig = importedConfig.default || importedConfig;
} catch (e) {
  // ignore error if file doesn't exist
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Merge user config with default config
const mergedConfig = mergeConfigs(nextConfig, userConfig);

// Create the next-intl plugin
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

// Export the final config with next-intl applied
export default withNextIntl(mergedConfig);

// Helper function to properly merge configurations
function mergeConfigs(baseConfig, userConfig) {
  if (!userConfig || Object.keys(userConfig).length === 0) {
    return baseConfig;
  }

  const result = { ...baseConfig };

  for (const key in userConfig) {
    if (
      typeof result[key] === "object" &&
      !Array.isArray(result[key]) &&
      typeof userConfig[key] === "object" &&
      !Array.isArray(userConfig[key])
    ) {
      result[key] = {
        ...result[key],
        ...userConfig[key],
      };
    } else {
      result[key] = userConfig[key];
    }
  }

  return result;
}
