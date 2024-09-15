
import chategoryModel from "@/lib/modals/chategoryModel";
import { NextResponse } from "next/server";
import slugify from "slugify";



export const GET = async () => {
    try {
        const categories = await chategoryModel.find();
        return NextResponse.json(categories, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
};

export const POST = async (req) => {
    const { name } = await req.json();
    if (!name) {
        return NextResponse.json({ message: "name is required" }, { status: 400 });
    }

    try {
        const slug = slugify(name, {
            replacement: "-",
            lower: true,
            trim: true,
        });

        await chategoryModel.create({ name, slug });
        return NextResponse.json({ message: "Category created" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
};

export const DELETE = async (req) => {
    const serachParams = req.nextUrl.searchParams;
    const id = serachParams.get("id");
    if (!id) {
        return NextResponse.json({ message: "Id not found" }, { status: 400 });
    }
    try {
        await chategoryModel.findByIdAndDelete(id);
        return NextResponse.json({ message: "Category deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
};
