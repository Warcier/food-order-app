import User from '@/model/register';
import connectMongoDB from '@/lib/Mongodb';

export default async function POST(request: any, response: any) {
    try{
        const { name, email, password, programme, year, StudentID } = request.json();
        await connectMongoDB();
        await User.create({
            name,
            email,
            password,
            programme,
            year,
            StudentID,
        });
        return response.status(201).json({ message: 'Registered' }).end();
    } catch (e) {
        return response.status(500).json({ message: 'Error occurred while creating user' }).end();
    }



    
}
