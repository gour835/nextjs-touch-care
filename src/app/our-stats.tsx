"use client";

import { Typography } from "@material-tailwind/react";
import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "20+",
    title: "Years of Experiance",
  },
  {
    count: "500+",
    title: "Happy Clients",
  },
  {
    count: "200+",
    title: "Bridal & Occations Looks",
  },
  {
    count: "50+",
    title: "Home Visits",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <Typography
          className="text-4xl text-[#4A1525] font-bold font-[inherit] leading-tight lg:w-3/4"
          color="blue-gray" onResize={undefined} onResizeCapture={undefined}        >
          Beauty Experience
        </Typography>
        <Typography
          className="text-xl text-[#d9bf77]  font-bold font-[inherit] leading-tight lg:w-3/4"
          color="blue-gray" onResize={undefined} onResizeCapture={undefined}        >
          A Journey Built on Experience & Trust
        </Typography>
        <Typography
          variant="paragraph"
          className="mt-3 w-full font-[inherit]  text-[#4A1525]/50  lg:w-9/12" onResize={undefined} onResizeCapture={undefined}        >
          Years of professional salon experience, countless client transformations, home visits, and beautiful bridal moments have shaped a beauty experience centered around one thing: making every client feel confident and cared for.
          <br></br>
          From everyday beauty appointments to important occasions, every service is approached with the same attention to detail, professionalism, and understanding of what each client wants.
        </Typography>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
