"use client";

import {
  Typography,
} from "@material-tailwind/react";

import TreatmentsCard from "@/components/treatments-card";



const EVENT_CONTENT = [

  {
    title: "Bridal & Occasion Makeup",
    sub: [
      '“Bridal Glow Package” (wedding day + touch-up kit)', 
      '“Party-Ready Makeup” (premium brands, long-wear finish)'
    ],
    des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
    img: "/image/avatar2.jpg",
  },
  {
    title: "Advanced Skin Treatments",
    sub: [
      'Hydrafacial Deluxe (with LED therapy or serum boosters)', 
      'Anti-Aging Facial (with massage, premium serums, take-home sample)', 
      '“Bridal Skin Prep Program” (3–6 session plan before wedding)'
    ],
    des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
    img: "/image/avatar2.jpg",
  },
  {
    title: "Hair Services",
    sub: [
      'Precision Haircut & Blowout',
      'Premium Hair Color (balayage, root melt, gloss treatments)',
      '“Color Correction & Care” (for damaged/over-processed hair)'
    ],
    des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
    img: "/image/avatar2.jpg",
  },
  {
    title: "Brow & Lash Design",
    sub: [
      'Brow Mapping & Tint (custom shape for face structure)',
      'Lash Lift & Tint (low-maintenance alternative to extensions)'
      
    ],
    des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
    img: "/image/avatar2.jpg",
  },
  {
    title: "Waxing & Hair Removal",
    sub: [
      'Full-body waxing packages ',
      '“Smooth Skin Ritual” (exfoliation + wax + soothing mask)'
      
    ],
    des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
    img: "/image/avatar2.jpg",
  },
  


];

export default function Treatments() {
  return (
    <section className="flex flex-col justify-center items-center py-8 px-8 lg:py-20">
      <div className="mx-auto container">
        <Typography variant="h6" className="text-center mb-2 text-[#d9bf77] font-[inherit]" color="inherit" onResize={undefined} onResizeCapture={undefined}>
          Services
        </Typography>
        <Typography variant="h3" className="text-center text-[#4A1525] font-[inherit] " color="inherit" onResize={undefined} onResizeCapture={undefined}>
          Treatments
        </Typography>

        <div className="flex flex-wrap justify-center ">
          {EVENT_CONTENT.map((props, idx) => (
            <div key={idx} className="w-full  lg:w-[calc(33.333%-0.75rem)]">
              <TreatmentsCard {...props}  />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

