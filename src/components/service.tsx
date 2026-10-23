"use client";

import {
  Button,
  Typography,
} from "@material-tailwind/react";
import TreatmentsCard from "./treatments-card";
import { ServiceProp } from "@/app/lib/types";

// interface ServiceProp{
//   title: string;
//   sub: Array<string>;
//   price: Number;
//   img: string
// }


// const EVENT_CONTENT = [

//   {
//     title: "Bridal & Occasion Makeup",
//     price: 'Rs /- 1000',
//     sub: [
//       '“Bridal Glow Package” (wedding day + touch-up kit)',
//       '“Party-Ready Makeup” (premium brands, long-wear finish)'
//     ],
//     img: "/image/beauty-product.png",
    
//   },
//   {
//     title: "Advanced Skin Treatments",
//     price: 'Rs /- 1500',
//     sub: [
//       'Hydrafacial Deluxe (with LED therapy or serum boosters)',
//       'Anti-Aging Facial (with massage, premium serums, take-home sample)',
//       '“Bridal Skin Prep Program” (3–6 session plan before wedding)'
//     ],
//     img: "/image/cleansing.png",
//   },
//   {
//     title: "Hair Services",
//     price: 'Rs /- 600',
//     sub: [
//       'Precision Haircut & Blowout',
//       'Premium Hair Color (balayage, root melt, gloss treatments)',
//       '“Color Correction & Care” (for damaged/over-processed hair)'
//     ],
//     img: "/image/hairdressing.png",
//   },
//   {
//     title: "Brow & Lash Design",
//     price: 'Rs /- 350',
//     sub: [
//       'Brow Mapping & Tint (custom shape for face structure)',
//       'Lash Lift & Tint (low-maintenance alternative to extensions)'

//     ],
//     img: "/image/mascara.png",
//   },
//   {
//     title: "Waxing & Hair Removal",
//     price: 'Rs /- 2000',
//     sub: [
//       'Full-body waxing packages ',
//       '“Smooth Skin Ritual” (exfoliation + wax + soothing mask)'

//     ],
//     img: "/image/waxing.png",
//   },



// ];



export default function Service({services}: {services: Record<string, any>}) {
  
  
  return (
    <section className="flex flex-col justify-center items-center py-8 px-8 lg:py-20">
      <div className="mx-auto container">
        <Typography variant="h6" className="text-center mb-2 text-[#d9bf77] font-[inherit]" color="inherit" onResize={undefined} onResizeCapture={undefined}>
          Services
        </Typography>
        <Typography variant="h3" className="text-center text-[#4A1525] font-[inherit] " color="inherit" onResize={undefined} onResizeCapture={undefined}>
          Treatments
        </Typography>

        <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl gap-6 mx-auto w-full">
          
          <div className="grid grid-cols-1 gap-5 w-full ">
            {services?.map((props: ServiceProp, idx: number) => (
                <div key={idx} className="w-full">
                <TreatmentsCard {...props} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

