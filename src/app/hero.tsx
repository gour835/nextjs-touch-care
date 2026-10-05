"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    // <div className="relative min-h-screen w-full bg-[url('/image/bg_1.jpg')] bg-cover bg-no-repeat bg-po">
    <div className="relative min-h-screen w-full bg-[url('/image/bg_1.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 mt-20 lg:m-auto grid place-items-start lg:place-items-center ">

          <Typography variant="h1" color="inherit" className="lg:max-w-5xl w-full  text-3xl lg:text-5xl font-[inherit] flex flex-col justify-center items-center gap-2" onResize={undefined} onResizeCapture={undefined}>
            <div className="flex flex-row gap-2 text-[#d9bf77]">
              <img
                src={'image/logo.png'}
                alt="logo"
                className="w-20 h-20 lg:w-16 lg:h-16 object-fit "
              />
              <span className="my-1 hidden lg:block lg:my-3">
                Touch & Care:

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
            className="lg:mt-3 lg:max-w-4xl lg:mb-8 mb-28 w-full text-center font-normal !text-gray-500 font-[inherit]" onResize={undefined} onResizeCapture={undefined}      >
            We bring you curated tips, expert routines, and essentials to highlight your natural glow and boost your confidence from within.
          </Typography>


        </div>
      </div>
    </div>
  );
}

export default Hero;
