import { NextResponse } from "next/server";

export async function GET(req: Request) {
    NextResponse.json({ message: "Hello World" });
}
