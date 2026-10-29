"use client";

import axios from "axios";
import React, { useState } from "react";
import Script from "next/script";
import { createOrderId } from "@/app/actions/razorpay";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";



export default function PurchaseButton({ price, scheduleId }: { price: number, scheduleId: string }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const router = useRouter();
  const { data } = useSession();
  const user = data?.user


  const handlePayment = async () => {

    setIsLoading(true);
    try {
      if (!user) {
        toast("Please login to complete your purchase", {
          icon: "⚠️",
          style: {
            borderRadius: "8px",
            background: "#fffbe6", // soft yellow
            color: "#856404", // dark amber text
            border: "1px solid red",
          },
        });
        setTimeout(() => {
          router.push('/login');
          
        }, 1500);
        return 
      }
      const orderId: string = await createOrderId(price, "INR", scheduleId);
      // in this code here i have to create an entry for orderId in the database without paymentId, signature, and method
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: price * 100,
        currency: "INR",
        name: user?.name, // Replace with dynamic company name
        description: "Payment for your order", // Replace with dynamic order description
        order_id: orderId,
        handler: async function (response: any) {
          try {
            const paymentResponse = await axios.post("/api/verifyOrder", {
              razorpay_order_id: orderId,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            // then after the payment is success here i have to update the existing fields of the database which were not set
            

            toast.success("Payment Successful!");
            console.log(paymentResponse.data);
            


          } catch (error) {
            alert("Payment verification failed. Please contact support.");
            console.log(error);
          }
        },
        prefill: {
          name: user?.name, // Replace with dynamic user data
          email: user?.email, // Replace with dynamic user data
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.on("payment.failed", function (response: any) {
        toast.error("Payment failed");
        console.log(response.error);
      });
      razorpay.open();
    } catch (error) {
      toast.error("Payment failed. Please try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>

      <button
        className="bg-green-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-300 transition-all duration-300 hover:shadow-lg hover:scale-105"
        onClick={handlePayment}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : `Pay ₹${price}`}
      </button>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </>
  );
}

