import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    email: String,
    order: Array,
});

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
