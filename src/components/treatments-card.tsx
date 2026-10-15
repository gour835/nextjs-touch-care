import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,

} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { ArrowBigRight, ArrowRight, ArrowRightCircle, ArrowRightFromLine } from "lucide-react";

interface EventContentCardProps {
  title: string;
  img: string;
  price: string;
  sub?: Array<string>;
}
export function TreatmentsCard({
  title,
  img,
  price,
  sub
}: EventContentCardProps) {
  const router = useRouter();
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex-col relative items-center justify-center border-gray-200 border h-full w-full bg-gray-900" onResize={undefined} onResizeCapture={undefined}    >
      <CardHeader
        floated={false}
        shadow={false}
        className="z-10 absolute right-1 bottom-1" onResize={undefined} onResizeCapture={undefined}      >
        <Image
          width={100}
          height={100}
          src={img}
          alt={`${title} image`}
          className="w-full bg-gray-900 rounded-none object-cover"
        />
      </CardHeader>
      <CardBody className="z-30 col-span-full lg:col-span-3" onResize={undefined} onResizeCapture={undefined}>
        <Typography variant="h4" color="blue-gray" className=" font-medium font-[inherit] text-[#d9bf77]" onResize={undefined} onResizeCapture={undefined}>
          {title}
        </Typography>
        <Typography variant="small" color="blue-gray" className="mb-4 ml-1 font-medium font-[inherit] text-amber-100" onResize={undefined} onResizeCapture={undefined}>
          Starting From {price} 
        </Typography>
        <ul  className=" mb-12 md:w-10/12 font-medium font-[inherit] text-white flex flex-col gap-2 text-md list-disc list-inside" >
          {sub?.map((sub,index)=>(
            <li key={index}>
              {sub}
            </li>
          ))}
        </ul>
      </CardBody>
      <div className=" w-full p-4 "  >
        <div className="group bg-gray-700 w-[40%] rounded-lg flex justify-between">
          <Button className=" bg-gray-700 flex flex-row justify-center items-center"  onResize={undefined} onResizeCapture={undefined}>
            Checkout 
            <span>
              <ArrowRight width={20} height={20} className=" group-hover:ml-2 transition-all duration-400"/>
            </span>
          </Button>

        </div>
      </div>
    </Card>
  );
}

export default TreatmentsCard;
