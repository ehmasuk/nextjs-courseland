import { connectDb } from "@/lib/connectDb";
import { createToken } from "@/lib/jwtToken";
import userModal from "@/lib/modals/userModal";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextResponse as res } from "next/server";
connectDb();

export const POST = async (req) => {
    try {
        const { name, email, password } = await req.json();

        const isExist = await userModal.findOne({ email });
        if (isExist) {
            return res.json({ message: "Email already exist" }, { status: 400 });
        }

        if (!name || !email || !password) {
            return res.json({ message: "name, email, password required" }, { status: 400 });
        }

        const encriptPassword = bcrypt.hashSync(password, 10);

        const user = await userModal.create({ name, email, password: encriptPassword });
        if (!user) {
            return res.json({ message: "Something went wrong" }, { status: 400 });
        }

        const token = await createToken(user._id);

        cookies().set("token", token);

        return res.json({ message: "User created successfully" }, { status: 200 });
    } catch (err) {
        console.log(err);
        return res.json({ message: err.message }, { status: 404 });
    }
};
