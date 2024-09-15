/** @type {import('next').NextConfig} */


const nextConfig = {
    env: {
        NEXT_PUBLIC_DOMAIN : "http://localhost:3000",
        DOMAIN : "http://localhost:3000"
    },
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
