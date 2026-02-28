/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
        ],
    },
    devIndicators: {
        buildActivity: false,
    },
};

module.exports = nextConfig;
