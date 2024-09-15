import { connectDb } from "@/lib/connectDb";
import { createToken } from "@/lib/jwtToken";
import userModal from "@/lib/modals/userModal";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextResponse as res } from "next/server";


export const POST = async (req) => {
    const { email, password } = await req.json();

    const user = await userModal.findOne({ email });

    if (!user) {
        return res.json({ message: "User not found" }, { status: 400 });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return res.json({ message: "Invalid password" }, { status: 400 });
    }

    const token = await createToken(user._id);

    cookies().set("token", token);

    cookies().set("user", JSON.stringify({ id: user._id, name: user.name, email: user.email }));

    return res.json({ message: "Login successfull", data: { id: user._id } }, { status: 200 });
};
