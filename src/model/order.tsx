import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    order_id: String,
    email: String,
    order: {},
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
