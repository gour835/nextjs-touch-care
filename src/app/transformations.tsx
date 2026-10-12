"use client";

import { Button, Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";
import Link from "next/link";

const EVENT_INFO = [
  {
    title: "Before",
    background: "bg-[url('/image/bg_1.jpg')]"
  },
  {
    title: "After",
    background: "bg-[url('/image/bg_4.jpg')]"

  },
];

export function Transformations() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
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
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
      </div>
      <Link href={'/transitions'}>
        <Button className="bg-amber-200 text-black m-10  hover:scale-105 transition-all duration-300 font-[inherit] text-sm font-light hover:font-medium" onResize={undefined} onResizeCapture={undefined}>
          See More Transitions
        </Button>
      </Link>
    </section>
  );
}

export default Transformations;
