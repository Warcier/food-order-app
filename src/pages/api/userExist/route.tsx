import connectMongoDB from '@/lib/Mongodb';
import User from "@/model/register";
import { NextResponse } from "next/server";

export async function POST(request: any, response: any) {
    try {
        await connectMongoDB();
        const { email } = await request.json();
        const user = await User.findOne({ email }).select("_id");
        console.log("Account: ", user);
        return NextResponse.json({ user });
    } catch (error) {
        console.log(error);
    }
}