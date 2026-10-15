import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

export async function POST(request: NextRequest) {
   try {
     const { amount, currency } = (await request.json()) as {
         amount: number,
         currency: string
     }
     if(!amount){
         return NextResponse.json({message: 'Amount is Required'}, {status: 400});
     }
 
     var options = {
         amount,   
         currency,
         receipt: `receipt-${Date.now()}`
     };
 
     const order = await razorpay.orders.create(options);
     console.log(order);
     return NextResponse.json({ orderId: order.id }, { status: 200 });
   } catch (error) {
        return NextResponse.json({message: 'server error', error}, {status: 500});
   }
}