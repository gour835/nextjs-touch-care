"use client";

import {
  Button,
  Typography,
} from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";
import Link from "next/link";
import { TestimonialsProps } from "./lib/types";



const EVENT_CONTENT = [
  {
   
    des: "Discover how AI is revolutionizing industries, creating new possibilities, and addressing global challenges. Gain a deep understanding of the pivotal role AI plays in driving innovation, sustainability, and progress in our rapidly evolving world.",
    name: "Marcell Glock",
    url: "/image/avatar1.jpg",
  },
  {
   
    des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
    name: "Marcell Glock",
   
    url: "/image/avatar2.jpg",
  },
  {
    
    des: "This session is a must-attend for healthcare professionals, AI enthusiasts, and anyone interested in the intersection of technology and well-being. Join us as we discuss how AI is bringing about positive changes in healthcare.",
    name: "Marcell Glock",
    url: "/image/avatar3.jpg",
    social: {
      instagram: '',
      facebook: '',
      youtube: '',
    }
  },
];

export function Testimony({testimonialsData}: {testimonialsData : TestimonialsProps[]}) {
  return (
    <section className="flex flex-col justify-center items-center py-8 px-8 lg:py-20">
      <div className="mx-auto container">
      <Typography variant="h3" className="font-[inherit]  text-[#4A1525] ml-5" onResize={undefined} onResizeCapture={undefined} >
        Testimonials
      </Typography>
        {testimonialsData.map((testimony, idx) => (
          <EventContentCard key={idx} testimony={testimony} />
        ))}
      </div>
      <Link href={'/testimony'}>
        <Button className="bg-amber-200 text-black m-10  hover:scale-105 transition-all duration-300 font-[inherit] text-sm font-light hover:font-medium" onResize={undefined} onResizeCapture={undefined}>
          See More Testimonials
        </Button>
      </Link>
    </section>
  );
}

export default Testimony;
