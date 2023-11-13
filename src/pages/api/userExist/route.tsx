import connectMongoDB from "@/lib/Mongodb";
import User from "@/models/register";
import {NextApiRequest, NextApiResponse} from "next";

export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        await connectMongoDB();
        const { email } = await req.body;
        const user = await User.findOne({ email }).select("_id");
        console.log("user: ", user);
        return res.status(201).json({ user });
    } catch (error) {
        console.log(error);
    }
}