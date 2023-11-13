
import Order from "@/models/order";
import connectMongoDB from "@/lib/Mongodb";
import {NextApiRequest, NextApiResponse} from "next";


export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const {email, order} = req.body;
    await connectMongoDB();

    await Order.create({
        email,
        order,
    });

    return res.status(200).json({ msg: 'Order Send' });

}
