'use client';
import React from "react";
import {
    Input,
    Option,
    Select,
    Button,
    Dialog,
    Textarea,
    IconButton,
    Typography,
    DialogBody,
    DialogHeader,
    DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface TitleProps {
    title: string;
    _id: string;
}

export function ServiceModel({ titles, titleValue }: { titles: TitleProps[], titleValue: string }) {
    const [open, setOpen] = React.useState(false);
    const [titleState, setTitleState] = React.useState(titleValue ?? '');

    const session = useSession();
    const router = useRouter();
    const path = usePathname()

    const handleOpen = () => {
        if (session.status != 'authenticated') {
            toast.error('Please Login first');
            router.push(`/login?redirect=${encodeURIComponent(path)}`);
        } else {
            setOpen(!open);
        }
    }
    console.log(titleState);

    return (
        <>
            <Button onClick={handleOpen} variant="gradient" onResize={undefined} onResizeCapture={undefined}>
                Checkout -
            </Button>
            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
            <Dialog size="sm" open={open} handler={handleOpen} className="p-4">

                <DialogHeader className="relative m-0 block" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Typography variant="h4" color="blue-gray" onResize={undefined} onResizeCapture={undefined}>
                        Schedule the Appointment
                    </Typography>
                    <Typography className="mt-1 font-normal text-gray-600" onResize={undefined} onResizeCapture={undefined}>
                        Choose the time which sutes you
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="text"
                        className="!absolute right-3.5 top-3.5"
                        onClick={handleOpen} onResize={undefined} onResizeCapture={undefined}          >
                        <XMarkIcon className="h-4 w-4 stroke-2" />
                    </IconButton>
                </DialogHeader>
                <DialogBody className="space-y-4 pb-6" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <form >


                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium" onResize={undefined} onResizeCapture={undefined}            >
                                Name
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="eg. White Shoes"
                                name="name"
                                className="placeholder:opacity-100 focus:!border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                                labelProps={{
                                    className: "hidden",
                                }} crossOrigin={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium" onResize={undefined} onResizeCapture={undefined}            >
                                Category
                            </Typography>
                            <input type="hidden" name="selectedTitle" value={titleState} />
                            <Select
                                className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                                placeholder="1"
                                labelProps={{
                                    className: "hidden",
                                }} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                                value={titleState}
                                onChange={(val) => {
                                    setTitleState(val || '');
                                }}
                            >
                                {titles.map((obj, idx) => {
                                    return (
                                        <Option key={idx}>
                                            {obj.title}
                                        </Option>
                                    )
                                })}
                            </Select>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 text-left font-medium" onResize={undefined} onResizeCapture={undefined}              >
                                    Weight
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="eg. <8.8oz | 250g"
                                    name="weight"
                                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }} crossOrigin={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                            </div>
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 text-left font-medium" onResize={undefined} onResizeCapture={undefined}              >
                                    Size
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="eg. US 8"
                                    name="size"
                                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }} crossOrigin={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                            </div>
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium" onResize={undefined} onResizeCapture={undefined}            >
                                Description (Optional)
                            </Typography>
                            <Textarea
                                rows={7}
                                placeholder="eg. This is a white shoes with a comfortable sole."
                                className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-600 ring-4 ring-transparent focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                                labelProps={{
                                    className: "hidden",
                                }} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                        </div>
                    </form>
                </DialogBody>
                <DialogFooter placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <Button className="ml-auto" onClick={handleOpen} onResize={undefined} onResizeCapture={undefined}>
                        Add Product
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}