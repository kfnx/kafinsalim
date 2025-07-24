let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
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
  webpack: (config, { isServer }) => {
    // Exclude binary files from webpack processing
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
      type: 'javascript/auto',
    });

    // Exclude other binary files
    config.module.rules.push({
      test: /\.(bin|exe|dll|so|dylib)$/,
      type: 'asset/resource',
    });

    // Exclude test files from pdf-parse
    config.module.rules.push({
      test: /test\/data\/.*\.pdf$/,
      type: 'ignore',
    });

    // Ignore specific problematic files
    config.externals = config.externals || [];
    config.externals.push({
      'sharp': 'commonjs sharp',
    });

    // Exclude pdf-parse from bundling to avoid test file issues
    if (isServer) {
      config.externals.push('pdf-parse');
    }

    return config;
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
