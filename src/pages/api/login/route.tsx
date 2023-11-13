import User from '@/models/register';
import connectMongoDB from '@/lib/Mongodb';
import {NextApiRequest, NextApiResponse} from "next";

export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try{
        const { email, password} = req.body;
        await connectMongoDB();
        await User.create({
            email,
            password,
        });
        return res.status(201).json({ message: 'Registered' });
    } catch (e) {
        return res.status(500).json({ message: 'Error occurred while creating user' });
    }
}
