import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  List,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

interface EventContentCardProps {
  title: string;
  img: string;
  sub?: Array<string>;
}
export function TreatmentsCard({
  title,
  img,
  sub
}: EventContentCardProps) {
  const router = useRouter();
  return (
    <Card
      color="transparent"
      shadow={false}
      className="flex-col rounded-none items-center justify-center border-gray-200 border h-full w-full" onResize={undefined} onResizeCapture={undefined}    >
      <CardHeader
        floated={false}
        shadow={false}
        className="" onResize={undefined} onResizeCapture={undefined}      >
        <Image
          width={76}
          height={76}
          src={img}
          alt="testimonial image"
          className="w-full object-cover"
        />
      </CardHeader>
      <CardBody className="col-span-full lg:col-span-3" onResize={undefined} onResizeCapture={undefined}>
        <Typography variant="h4" color="blue-gray" className="mb-4 font-medium font-[inherit] text-[#4A1525]" onResize={undefined} onResizeCapture={undefined}>
          {title}
        </Typography>
        <ul  className=" mb-12 md:w-10/12 font-medium font-[inherit] text-[#4A1525]/55 flex flex-col gap-2 text-md" >
          {sub?.map((sub,index)=>(
            <li key={index} className="list-item">
              {sub}
            </li>
          ))}
        </ul>

       

      </CardBody>
    </Card>
  );
}

export default TreatmentsCard;
