/** @type {import('next').NextConfig} */
const nextConfig = {
    // You can add various configurations here
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.optimization.minimize = false;
        }
        return config;
    },
};

export default nextConfig;
