import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    scheduleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'schedule',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        default: 'INR'
    },
    status: {
        type: String,
        enum: ['created', 'paid', 'failed'],
        default: 'created'
    },
    razorpay: {
        orderId: { type: String, required: true, unique: true },
        paymentId: { type: String },
        signature: { type: String },
        method: { type: String }
    }
}, { timestamps: true });

export const OrderModel = mongoose.models.orders || mongoose.model('orders', orderSchema);