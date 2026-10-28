/* eslint-disable @next/next/no-img-element */
"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

import Link from "next/link";


function Hero() {
  return (
    // <div className="relative min-h-screen w-full bg-[url('/image/bg_1.jpg')] bg-cover bg-no-repeat bg-po">
    <div className="relative min-h-screen w-full bg-[url('/image/bg_1.jpg')] bg-cover bg-no-repeat ">
      <div className="absolute inset-0 h-full w-full" />
      <div className="grid place-items-center place-content-center min-h-screen px-8">
        <div className="container relative z-10 mt-20 lg:m-auto grid place-items-start lg:place-items-center ">

          <Typography variant="h1" color="inherit" className="lg:max-w-5xl w-full  text-3xl lg:text-5xl font-[inherit] flex flex-col justify-center items-center gap-2" onResize={undefined} onResizeCapture={undefined}>
            <div className="flex flex-row gap-2 text-[#d9bf77]">
              <Image
              width={20}
              height={20}
                src={'/image/logo.png'}
                alt="logo"
                className="w-20 h-20 lg:w-16 lg:h-16 object-fit "
              />
              <span className="my-1 hidden lg:block lg:my-3">
                Touch & Care

              </span>
            </div>
            <div className="w-full lg:w-[57%] h-[1.6px] rounded-full bg-[#d9bf77] mb-3">

            </div>
            <div className=" text-[#4A1525] font-normal  text-4xl lg:text-5xl text-center">
              Your All-in-One Beauty Hub
            </div>
          </Typography>
          <Typography
            variant="lead"
            className="mt-4 lg:mt-3 lg:max-w-4xl lg:mb-8  w-full text-center font-normal !text-gray-500 font-[inherit]" onResize={undefined} onResizeCapture={undefined}      >
            We bring you curated tips, expert routines, and essentials to highlight your natural glow and boost your confidence from within.
          </Typography>

          <div className="flex flex-col mx-auto lg:mt-0 mt-4 lg:flex-row gap-3">

            <Link href='/transitions'>
              <Button
                color="white"
                variant="text"
                className="relative mx-auto w-80 lg:w-40 h-14 group text-[#4A1525] overflow-hidden  bg-[#d9bf77] rounded-none shadow hover:border hover:border-orange-400 shadow-orange-100 transition-all duration-400" onResize={undefined} onResizeCapture={undefined}>
                <span className="relative z-10">
                  Get Started
                </span>
              </Button>
            </Link>
            <Link href={'/register'}>
              <Button
                color="white"
                variant="text"
                className="relative w-80 lg:w-40 h-14 group text-[#4A1525] overflow-hidden  bg-[#d9bf77] rounded-none shadow hover:border hover:border-orange-400 shadow-orange-100 transition-all duration-400" onResize={undefined} onResizeCapture={undefined}>
                <span className="relative z-10">
                  Login | Register
                </span>
              </Button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
