import connectMongoDB from '@/lib/Mongodb';
import Order from "@/models/order";
import { NextApiRequest, NextApiResponse } from "next";

export default async function GET(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    await connectMongoDB();
    const order = await Order.find();
    return res.status(200).json(order)
}