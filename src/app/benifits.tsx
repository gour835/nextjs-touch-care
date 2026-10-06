"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Benifits() {
  return (
    // <div className="relative min-h-screen w-full bg-[url('/image/bg_1.jpg')] bg-cover bg-no-repeat bg-po">
    <div className="relative min-h-screen w-full bg-[url('/image/bg_3.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-10 mx-auto grid place-items-end text-right">

          <Typography
            variant="h1"
            color="black"
           className="relative inline-block lg:max-w-4xl text-[#4A1525] text-4xl lg:text-5xl font-[inherit] mt-3"
            onResize={undefined}
            onResizeCapture={undefined}
          >
            Beauty That Fits Into Real Life
          </Typography>
          <Typography variant="h5" color="inherit" className="lg:max-w-4xl font-[inherit] text-[#d9bf77]" onResize={undefined} onResizeCapture={undefined}>
            Not every appointment needs to be the same.
          </Typography>
          <Typography variant="lead" color="black" className="lg:max-w-4xl font-[inherit] text-justify mt-8 mb-2 p-2 text-[#4A1525]  " onResize={undefined} onResizeCapture={undefined}>
            Some days call for a quick refresh. Some deserve a little more time. And some moments, like a wedding, celebration, party, or important event, call for everything to be just right.
          </Typography>
          <Typography variant="lead" color="black" className="lg:max-w-4xl font-[inherit] text-justify mt-1 mb-2 p-2 text-[#4A1525] " onResize={undefined} onResizeCapture={undefined}>
           Choose services based on the occasion, available time, desired result, and budget. From simple beauty essentials and regular self-care to detailed hair, skin, and makeup treatments, find exactly what fits the moment.
          </Typography>
          <Typography variant="lead" color="black" className="lg:max-w-4xl font-[inherit] text-justify mt-1 mb-2 p-2 text-[#4A1525] " onResize={undefined} onResizeCapture={undefined}>
            No unnecessary extras. No rushed appointments. Just thoughtful beauty services designed around the experience and results you&apos;re looking for.
          </Typography>
          <Typography variant="h5" color="black" className="lg:max-w-4xl font-[inherit] text-justify mt-1 mb-2 p-2 text-[#4A1525] " onResize={undefined} onResizeCapture={undefined}>
            Because feeling beautiful shouldn&apos;t come with unnecessary compromise.
          </Typography>

        </div>
      </div>
    </div>
  );
}

export default Benifits;
