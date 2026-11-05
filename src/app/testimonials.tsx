"use client";

import {
  Typography,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";
import { SimplePagination } from "@/components/pagination";
import { TestimonialsProps } from "./lib/types";



export function Testimonials({testimonialsData, totalPages}: {testimonialsData : TestimonialsProps[], totalPages: number}) {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="mx-auto container">
      <Typography variant="h3" className="font-[inherit]  text-[#4A1525] ml-5" onResize={undefined} onResizeCapture={undefined} >
        Testimonials
      </Typography>
        {testimonialsData.map((testimony, idx) => (
          <EventContentCard key={idx} testimony={testimony} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
      <SimplePagination totalPages={totalPages}/>

      </div>
    </section>
  );
}

export default Testimonials;
