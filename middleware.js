import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request) {
    const path = request.nextUrl.pathname;

    const loginUsersCanSee = path === "/profile";
    const logoutUsersCanSee = path === "/login" || path === "/register";
    const adminCanAccess = path === "/admin";

    const token = cookies().get("token")?.value;
    const isLogedin = token || false;
    var user = null;
    var isAdmin = null;



    if (token) {
        user = await (
            await fetch(process.env.DOMAIN + "/api/users/me", {
                headers: {
                    token,
                },
            })
        ).json();
        isAdmin = user?.isAdmin;
    }

    if (isLogedin && logoutUsersCanSee) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    if (!isLogedin && loginUsersCanSee) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (!isAdmin && adminCanAccess) {
        return NextResponse.redirect(new URL("/", request.url));
    }
}

export const config = {
    matcher: ["/profile", "/login", "/register", "/admin"],
};
