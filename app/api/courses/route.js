import courseModal from "@/lib/modals/courseModal";
import uploadCloudinary from "@/lib/uploadCloudinary";
import { NextResponse } from "next/server";
import slugify from "slugify";

export const GET = async (req) => {
    return NextResponse.json({msg:"works"}, { status: 200 });
    // const searchParams = req.nextUrl.searchParams;

    // const slug = searchParams.get("slug");

    // try {
    //     if (slug) {
    //         const courses = await courseModal.findOne({ slug });
    //         return NextResponse.json(courses, { status: 200 });
    //     }

    //     const courses = await courseModal.find();
    //     return NextResponse.json(courses, { status: 200 });
    // } catch (error) {
    //     console.log(error);
    //     return NextResponse.json({ message: error.message }, { status: 400 });
    // }
};

export const POST = async (req) => {
    const { title, price, description, image, categoryId } = await req.json();

    if (!title || !price || !description || !image || !categoryId) {
        return NextResponse.json({ message: "title,price,description,image,categoryId required" }, { status: 400 });
    }

    const slug = slugify(title, {
        replacement: "-",
        lower: true,
        trim: true,
    });

    try {
        const result = await uploadCloudinary.uploader.upload(image, {
            folder: "courseland",
        });

        if (!result) {
            return NextResponse.json({ message: "cannot upload image to cloudinay" }, { status: 400 });
        }

        await courseModal.create({ title, price, description, image: result.secure_url, categoryId, slug });

        return NextResponse.json({ message: "Course created succesfully", data: result }, { status: 200 });
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
        await courseModal.findByIdAndDelete(id);
        return NextResponse.json({ message: "Course deleted" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
};
