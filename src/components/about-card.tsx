'use client';
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

interface AboutCardProp {
  title?: string;
  subTitle?: string;
  description?: string;
  background?: string;
  button?: boolean;
}

export function AboutCard({ title, description, subTitle, background, button }: AboutCardProp) {
  return (
    <Card className="w-full" shadow={false} onResize={undefined} onResizeCapture={undefined}>
      <CardBody className={`h-[453px] ${button && 'p-5'} flex flex-col justify-end items-center rounded-2xl   ${background ? background : 'bg-gray-900'} `} onResize={undefined} onResizeCapture={undefined}>
        <Typography variant="h6" className="mb-4 text-center" color="white" onResize={undefined} onResizeCapture={undefined}>
          {subTitle}
        </Typography>
        <Typography variant="h4" className="text-center" color="white" onResize={undefined} onResizeCapture={undefined}>
          {title}
        </Typography>
        <div className={`flex flex-col justify-end items-center ${button && ' bg-black/20 backdrop-blur-md border border-black/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] w-full rounded-xl p-2'}`}>

          <Typography
            color="black"
            className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal" onResize={undefined} onResizeCapture={undefined}        >
            {description}
          </Typography>
          <Link href={'/transitions'} >
          <Button
            color="white"
            size="md"
            className={`rounded-md bg-yellow-300/75 backdrop-blur-md border border-yellow-300/75 hover:bg-yellow-300 hover:shadow hover:shadow-yellow-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] ${button ?? 'hidden'}`}
            onResize={undefined}
            onResizeCapture={undefined}
           
          >
            View More Transitions
          </Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}


export default AboutCard;
