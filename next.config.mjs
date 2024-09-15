/** @type {import('next').NextConfig} */


const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "escuela-ray-bolivar-sosa.com",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;
