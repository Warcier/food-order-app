
import Order from "@/model/order";
import connectMongoDB from "@/lib/Mongodb";

export default async function POST(request: any, response: any) {
    const {email, order} = request.body;
    await connectMongoDB();

    await Order.create({
        email,
        order,
    });

    return response.status(200).json({ msg: 'Order Send' }).end();

}
