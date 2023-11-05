
import Order from "@/model/order";
import connectMongoDB from "@/lib/mongodb";

export default async function POST(request: any, response: any) {
    const { order_id, email, order} = request.body;
    await connectMongoDB();

    await Order.create({
        order_id,
        email,
        order,
    });

    return response.status(200).json({ message: 'Order Send' }).end();

}
