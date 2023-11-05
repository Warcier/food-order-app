import connectMongoDB from '@/lib/mongodb';
import Order from "@/model/order";


export default async function GET(request: any, response: any) {
    await connectMongoDB();
    const order = await Order.find();
    return response.status(200).json({ order }).end();

}
