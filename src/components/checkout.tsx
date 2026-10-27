"use client";

import { Button, Typography } from "@material-tailwind/react";
import PurchaseButton from "./buyButton";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { ServiceModel } from "./service-model";
interface CheckoutProps {
  title: string;
  sub: Array<string>;
  price: number;
}

function Checkout({ title, sub, price }: CheckoutProps) {
  const { status} = useSession();

 useEffect(() => {
  if (status === "unauthenticated") {
    toast.error("Please login before checkout", {
      id: "auth-warning-toast", // Ensures only one toast with this ID exists at a time
    });
  }
}, [status]);
  return (
    // <div className="relative min-h-screen w-full bg-[url('/image/bg_1.jpg')] bg-cover bg-no-repeat bg-po">
    <div className="relative min-h-screen w-full bg-[url('/image/bg_3.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-10 mx-auto grid place-items-end text-right">

          <Typography
            variant="h1"
            color="black"
            className="relative inline-block lg:max-w-4xl text-[#4A1525] text-4xl lg:text-5xl font-[inherit] mt-3"
            onResize={undefined}
            onResizeCapture={undefined}
          >
            {title}
          </Typography>
          <Typography variant="h5" color="inherit" className="lg:max-w-4xl font-[inherit] text-[#d9bf77]" onResize={undefined} onResizeCapture={undefined}>
            Not every appointment needs to be the same.
          </Typography>

          {sub.map((s, idx) => {
            return (
              <Typography variant="lead" color="black" className={`lg:max-w-4xl font-[inherit]  ${idx == 1 ? 'mt-8': 'mt-1'} mb-2 p-2 text-[#4A1525]`} onResize={undefined} onResizeCapture={undefined} key={idx}>
                {s}
              </Typography>
            )
          })}


          <Typography variant="h5" color="black" className="lg:max-w-4xl font-[inherit] text-justify mt-1 mb-2 p-2 text-[#4A1525] " onResize={undefined} onResizeCapture={undefined}>
            Because feeling beautiful shouldn&apos;t come with unnecessary compromise.
          </Typography>

          {/* <PurchaseButton price={price}/> */}
          <ServiceModel/>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
