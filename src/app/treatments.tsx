"use client";

import {
  Button,
  Typography,
} from "@material-tailwind/react";

import TreatmentsCard from "@/components/treatments-card";
import Link from "next/link";



const EVENT_CONTENT = [

  {
    title: "Bridal & Occasion Makeup",
    price: 'Rs /- 1000',
    sub: [
      '“Bridal Glow Package” (wedding day + touch-up kit)',
      '“Party-Ready Makeup” (premium brands, long-wear finish)'
    ],
    img: "/image/beauty-product.png",
    
  },
  {
    title: "Advanced Skin Treatments",
    price: 'Rs /- 1500',
    sub: [
      'Hydrafacial Deluxe (with LED therapy or serum boosters)',
      'Anti-Aging Facial (with massage, premium serums, take-home sample)',
      '“Bridal Skin Prep Program” (3–6 session plan before wedding)'
    ],
    img: "/image/cleansing.png",
  },
  {
    title: "Hair Services",
    price: 'Rs /- 600',
    sub: [
      'Precision Haircut & Blowout',
      'Premium Hair Color (balayage, root melt, gloss treatments)',
      '“Color Correction & Care” (for damaged/over-processed hair)'
    ],
    img: "/image/hairdressing.png",
  },
  {
    title: "Brow & Lash Design",
    price: 'Rs /- 350',
    sub: [
      'Brow Mapping & Tint (custom shape for face structure)',
      'Lash Lift & Tint (low-maintenance alternative to extensions)'

    ],
    img: "/image/mascara.png",
  },
  {
    title: "Waxing & Hair Removal",
    price: 'Rs /- 2000',
    sub: [
      'Full-body waxing packages ',
      '“Smooth Skin Ritual” (exfoliation + wax + soothing mask)'

    ],
    img: "/image/waxing.png",
  },



];

{/* <a href="https://www.flaticon.com/free-icons/cosmetics" title="cosmetics icons">Cosmetics icons created by kliwir art - Flaticon</a> */}

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

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-8xl mx-auto w-full">
          {/* Left Side: 2x2 Grid (4 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full md:w-2/3">
            {EVENT_CONTENT.slice(0, 4).map((props, idx) => (
              <div key={idx} className="w-full">
                <TreatmentsCard {...props} />
              </div>
            ))}
          </div>

          {/* Right Side: 1 card, perfectly centered vertically */}
          <div className="flex flex-col gap-10 items-center justify-center w-full md:w-1/3">
            {EVENT_CONTENT[4] && (
              <div className="w-full">
                <TreatmentsCard {...EVENT_CONTENT[4]} />
              </div>
            )}

            <Link href={'services'}>
            <Button onResize={undefined} onResizeCapture={undefined}>
              Visit CheckOut Page
            </Button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}

