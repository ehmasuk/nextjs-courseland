"use server";

import { revalidatePath } from "next/cache";

export const revalidateData = (url) => {
    revalidatePath(url);
};

export const fetchData = async (url) => {
    if (!process.env.NEXT_PUBLIC_DOMAIN) return [];
    const res = await fetch(process.env.NEXT_PUBLIC_DOMAIN + url);
    if (!res.ok) {
        console.log(res);
        throw new Error("Error fetching data from " + url);

        
    }
    return await res.json();
};



