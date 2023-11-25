import connectMongoDB from '@/lib/Mongodb';
import Order from "@/models/order";
import { NextApiRequest, NextApiResponse } from "next";
import {getServerSession} from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]";

export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const session = await getServerSession(req, res, authOptions)

    if (session) {
        await connectMongoDB();
        const order = await Order.find();
        return res.status(200).json(order)
    }
    return res.json({
        message: 'Invalid session',
    })

}