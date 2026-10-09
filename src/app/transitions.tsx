"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";
import { uuid } from "zod";

const EVENT_INFO = [
  {
    before: "bg-[url('/image/bg_1.jpg')]",
    after: "bg-[url('/image/bg_4.jpg')]"
  },
  {
    before: "bg-[url('/image/bg_1.jpg')]",
    after: "bg-[url('/image/bg_4.jpg')]"
  },
  {
    before: "bg-[url('/image/bg_1.jpg')]",
    after: "bg-[url('/image/bg_4.jpg')]"
  },
];

export function Transition() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 mt-7 lg:mt-5 py-10">
      <Typography variant="h6" className="text-center mb-2 text-[#d9bf77] font-[inherit]" color="inherit" onResize={undefined} onResizeCapture={undefined}>
        Transformations
      </Typography>
      <Typography variant="h3" className="text-center text-[#4A1525] font-[inherit] " color="inherit" onResize={undefined} onResizeCapture={undefined}>
        See the Difference
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500 font-[inherit]" onResize={undefined} onResizeCapture={undefined}      >
        Every transformation starts with understanding what you want and ends with a look that feels right for you. Explore real client transformations and see how thoughtful beauty services can bring out a fresh, confident version of yourself.
      </Typography>
      <div className="mt-8  w-full flex flex-col ">
        {EVENT_INFO.map((props, idx) => (
          <span key={crypto.randomUUID()} className="border border-solid  my-10 p-2 lg:shadow-sm rounded-2xl shadow-2xl shadow-black ">
            <Typography variant="h6" className="text-left mt-3 mb-2 text-[#d9bf77] font-[inherit]" color="inherit" onResize={undefined} onResizeCapture={undefined}>
              Transformations
            </Typography>
            <div className="flex flex-col lg:flex-row gap-5">
              <AboutCard background={props.after} />
              <AboutCard background={props.before} />

            </div>
          </span>
        ))}

      </div>
    </section>
  );
}

export default Transition;
