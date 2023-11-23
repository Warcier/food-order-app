import User from '@/models/register';
import connectMongoDB from '@/lib/Mongodb';
import {NextApiRequest, NextApiResponse} from "next";

export default async function POST(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try{
        const { name, email, password, programme, year, studentID } = req.body;
        await connectMongoDB();
        await User.create({
            name,
            email,
            password,
            studentID,
            programme,
            year,
        });
        return res.status(201).json({ message: 'Registered' });
    } catch (e) {
        return res.status(500).json({ message: 'Error occurred while creating user' });
    }
}
