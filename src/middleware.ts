import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

    const { pathname } = req.nextUrl;
    

    const protectedRoutes = [
        "/balance",
        "/account",
        "/account/transactions",
        "/account/restrictions",
        "/account/preferences",
        "/account/history-game",
        "/account/chat-blocks",
        "/account/api",
        "/account/documents/info",
        "/account/documents/personal",
        "/account/documents/proof-of-address",
        "/account/documents/proof-of-identification"
    ];

    if (token || pathname.includes("/api/auth") || pathname === "/") {
        return NextResponse.next()
    }

    if (protectedRoutes.includes(pathname) && !token) {
        const url = new URL("/", req.url)
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/balance",
        "/account",
        "/account/transactions",
        "/account/restrictions",
        "/account/preferences",
        "/account/history-game",
        "/account/chat-blocks",
        "/account/api",
        "/account/documents/info",
        "/account/documents/personal",
        "/account/documents/proof-of-address",
        "/account/documents/proof-of-identification"
    ]
}