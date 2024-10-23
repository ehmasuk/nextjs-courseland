
import courseReviewModal from "@/lib/modals/courseReviewModal";
import { NextResponse } from "next/server";
export const GET = async () => {
    return NextResponse.json({message:"working"}, { status: 200 });
    // try {
    //     const reviews = await courseReviewModal.find();
    //     return NextResponse.json(reviews, { status: 200 });
    // } catch (error) {
    //     console.log(error);
    //     return NextResponse.json({ message: error.message }, { status: 400 });
    // }
};
// export const POST = async (req) => {
//     const { userId, courseId, review, rating } = await req.json();

//     if (!userId || !courseId || !review || !rating) {
//         return NextResponse.json({ message: "userId, courseId, review, rating required" }, { status: 400 });
//     }

//     try {
//         await courseReviewModal.create({ userId, courseId, review, rating });
//         return NextResponse.json({ data: "Review created" }, { status: 200 });
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({ message: error.message }, { status: 400 });
//     }
// };
// export const DELETE = async (req) => {
//     const serachParams = req.nextUrl.searchParams;
//     const id = serachParams.get("id");
//     if (!id) {
//         return NextResponse.json({ message: "Id not found" }, { status: 400 });
//     }
//     try {
//         await courseReviewModal.findByIdAndDelete(id);
//         return NextResponse.json({ message: "Review deleted" }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: error.message }, { status: 400 });
//     }
// };
