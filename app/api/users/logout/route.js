import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
    cookies()
        .getAll()
        .map((cookie) => {
            cookies().delete(cookie.name);
        });
    return NextResponse.json({ message: "Loged out!" }, { status: 200 });
};
