import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    email: String,
    order: Array,

},
    { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default Order;
