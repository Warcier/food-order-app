import connectMongoDB from '@/lib/Mongodb';
import User from "@/models/register";
import { NextApiRequest, NextApiResponse } from "next";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";
import {redirect} from "next/navigation";

export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const session = await getServerSession(req, res, authOptions)

    if (session) {
        await connectMongoDB();
        const user = await User.find();
        return res.status(200).json(user)
    }
    return res.json({
        message: 'Invalid session',
    })

}