import { connectDb } from "@/lib/connectDb";
import { compareToken } from "@/lib/jwtToken";
import userModal from "@/lib/modals/userModal";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

await connectDb()

export const GET = async (req) => {

    const token = req.headers.get('token')

    if (!token) {
        return NextResponse.json({ message: "Please login first" }, { status: 400 });
    }


    const validToken = compareToken(token);

    if (!validToken) {
        return NextResponse.json({ message: "Invalid token" }, { status: 400 });
    }

    const user = await userModal.findById(validToken.id).select("-password");

    if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    return NextResponse.json(user, { status: 200 });
};
