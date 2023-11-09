import Register from '@/model/register';
import connectMongoDB from '@/lib/Mongodb';

export default async function POST(request: any, response: any) {
    const { name, email, password, programme, year, StudentID } = request.body;
    await connectMongoDB();

    await Register.create({
        name,
        email,
        password,
        programme,
        year,
        StudentID,
    });

    return response.status(200).json({ message: 'Registered' }).end();
    
}
