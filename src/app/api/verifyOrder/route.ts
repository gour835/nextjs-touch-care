import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto';
import { OrderModel } from "@/models/order";

export interface VerifyBody {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;

}

export async function POST(request: NextRequest) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature }: VerifyBody = await request.json();
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return NextResponse.json({ error: "Missing required parameters", success: false }, { status: 400 })
        }

        const secret = process.env.RAZORPAY_KEY_SECRET as string;
        if (!secret) {
            return NextResponse.json({ error: 'Razorpay secret not found', success: false }, { status: 400 })
        }
        const HMAC = crypto.createHmac('sha256', secret);
        HMAC.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const generatedSignature = HMAC.digest("hex");
        if (generatedSignature === razorpay_signature) {
            await OrderModel.findOneAndUpdate(
                { "razorpay.orderId": razorpay_order_id },
                {
                    status: "paid",
                    "razorpay.paymentId": razorpay_payment_id,
                    "razorpay.signature": razorpay_signature
                }
            );
            return NextResponse.json({ message: "Payment verified successfully", success: true, razorpay_payment_id, razorpay_order_id })
        } else {
            return NextResponse.json({ error: "Invalid signature", success: false }, { status: 400 })
        }
    } catch (error) {
        return NextResponse.json({ error: "An error occurred", success: false }, { status: 500 })
    }
}