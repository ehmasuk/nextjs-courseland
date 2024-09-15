/** @type {import('next').NextConfig} */


const nextConfig = {
    env: {
        NEXT_PUBLIC_DOMAIN : "https://nextjs-courseland.vercel.app",
        DOMAIN : "https://nextjs-courseland.vercel.app"
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
