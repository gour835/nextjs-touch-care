import { auth } from "@/auth";
import { OrderModel } from "@/models/order";
import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});


export async function POST(request: NextRequest) {
    try {
        const session = await auth();
        if(!session || !session.user){
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
        const { amount, currency, scheduleId } = (await request.json()) as {
            amount: number,
            currency: string,
            scheduleId: string
        }
        if (!amount) {
            return NextResponse.json({ message: 'Amount is Required' }, { status: 400 });
        }

        var options = {
            amount,
            currency,
            receipt: `receipt-${Date.now()}`
        };

        const order = await razorpay.orders.create(options);
        console.log(order);

        //  updating database
        const user = await User.findOne({email: session.user.email});
        await OrderModel.create({
            razorpay: { orderId: order.id },
            userId: user._id,
            status: 'created',
            scheduleId,
            amount,
            currency
        });
        return NextResponse.json({ orderId: order.id }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'server error', error }, { status: 500 });
    }
}