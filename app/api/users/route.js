import { connectDb } from "@/lib/connectDb";
import userModal from "@/lib/modals/userModal";
import bcrypt from "bcrypt";
import { NextResponse as res } from "next/server";

connectDb();

export const GET = async (req) => {
    try {
        const users = await userModal.find();

        if (!users) {
            return res.json({ message: "Something went wrong" }, { status: 400 });
        }

        return res.json(users, { status: 202 });
    } catch (error) {
        console.log(err);
        return res.json({ message: err.message }, { status: 404 });
    }
};

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

        return res.json({ message: "User created successfully" }, { status: 202 });
    } catch (err) {
        console.log(err);
        return res.json({ message: err.message }, { status: 404 });
    }
};
