'use client';
import React, { useActionState, useState } from "react";
import {
    Input,
    Option,
    Select,
    Button,
    Dialog,
    IconButton,
    Typography,
    DialogBody,
    DialogHeader,
    Switch,
    Progress,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { saveSchedule } from "@/app/actions/action";
import PurchaseButton from "./buyButton";

interface TitleProps {
    title: string;
    _id: string;
}

export function ServiceModel({ titles, titleValue, price }: { titles: TitleProps[], titleValue: string, price: number }) {
    const [open, setOpen] = useState(false);
    const [titleState, setTitleState] = useState<string>(titleValue ?? '');
    const [showPayment, setShowPayment] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const now = new Date();
    const todayStr = now.toISOString().split("T")[0];

    // Format current time as HH:MM for the 'min' attribute
    const currentTimeStr = `${String(now.getHours()).padStart(2, "0")}:${String(
        now.getMinutes()
    ).padStart(2, "0")}`;

    // If selected date is today, disable past times. Otherwise, allow all times.
    const minTime = selectedDate === todayStr ? currentTimeStr : undefined;

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value;
        setSelectedDate(newDate);

        // If user changes date back to today and their already-selected time is now in the past, reset it
        if (newDate === todayStr && selectedTime && selectedTime < currentTimeStr) {
            setSelectedTime("");
        }
    };

    const session = useSession();
    const user_email = session.data?.user?.email;
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
    
    const [state, action, isPending] = useActionState(saveSchedule, undefined);

    return (
        <>
            <Button onClick={handleOpen} variant="gradient" onResize={undefined} onResizeCapture={undefined}>
                Checkout -
            </Button>
            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
            <Dialog size="sm" open={open} handler={handleOpen} className="p-4">

                {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                <DialogHeader className="relative m-0 block" >
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
                    <div className="w-full">
                        <div className="mb-2 flex items-center justify-between gap-4">
                            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                            <Typography color="blue-gray" variant="h6">
                                Completed
                            </Typography>
                            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                            <Typography color="blue-gray" variant="h6">
                                {state?.success? 50: 0}
                            </Typography>
                        </div>
                        {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                        <Progress value={state?.success? 50: 0} />
                    </div>
                </DialogHeader>
                {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                <DialogBody className="space-y-4 pb-6" >
                    <form action={action} >
                        {/* userID hidden */}
                        <input type="hidden" name="userEmail" value={user_email} />
                        {state?.errors?.userEmail && <p className="text-red-400 mt-1 text-sm">{state.errors.userEmail}</p>}
                        {/* Show general or server errors */}
                        {state?.errors?._form && (
                            <p className="text-red-500">{state.errors._form}</p>
                        )}

                        {state?.success && (
                            <div className="bg-green-300 rounded-lg p-2">

                            <p className="text-black">{state.message}</p>
                            </div>
                        )}
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium" onResize={undefined} onResizeCapture={undefined}            >
                                Category
                            </Typography>
                            <input type="hidden" name="serviceId" value={titleState} />
                            {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                            <Select
                                className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900 group-hover:!border-primary"
                                placeholder="1"
                                disabled={state?.success && true}
                                    aria-disabled={state?.success && true}
                                labelProps={{
                                    className: "hidden",
                                }}
                                value={titleState}
                                onChange={(val) => {
                                    setTitleState(val || '');
                                }}
                            >
                                {titles.map((obj, idx) => {
                                    return (
                                        <Option value={obj._id} key={idx}>
                                            {obj.title}
                                        </Option>
                                    )
                                })}
                            </Select>
                            {state?.errors?.serviceId && <p className="text-red-400 mt-1 text-sm">{state.errors.serviceId}</p>}
                        </div>
                        <div className="flex gap-4 my-2">
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 text-left font-medium" onResize={undefined} onResizeCapture={undefined}              >
                                    Date
                                </Typography>
                                {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                                <Input
                                    type="date"
                                    color="gray"
                                    size="lg"
                                    placeholder="eg. <8.8oz | 250g"
                                    name="date"
                                    min={todayStr}
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                                    required
                                    disabled={state?.success && true}
                                    aria-disabled={state?.success && true}
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }} />
                                {state?.errors?.date && <p className="text-red-400 mt-1 text-sm">{state.errors.date}</p>}
                            </div>
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 text-left font-medium" onResize={undefined} onResizeCapture={undefined}              >
                                    Time
                                </Typography>
                                {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                                <Input
                                    type="time"
                                    color="gray"
                                    size="lg"
                                    placeholder="eg. US 8"
                                    name="time"
                                    min={minTime}
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                                    required
                                    disabled={state?.success && true}
                                    aria-disabled={state?.success && true}
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                    labelProps={{
                                        className: "hidden",
                                    }} />
                                {state?.errors?.time && <p className="text-red-400 mt-1 text-sm">{state.errors.time}</p>}
                            </div>
                        </div>

                        <Button type="submit" disabled={isPending || state?.success} className={`"ml-auto" ${state?.success && 'hidden'}`} onResize={undefined} onResizeCapture={undefined}>
                            Add Schedule
                        </Button>
                        <div className={` ${!state?.success && 'hidden'}`}>
                            {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
                            <Switch
                                id="custom-switch-component"
                                ripple={false}
                                label='Pay Now'
                                className="h-full w-full checked:bg-[#2ec946]"
                                containerProps={{
                                    className: "w-11 h-6",
                                }}
                                circleProps={{
                                    className: "before:hidden left-0.5 border-none",
                                }}
                                onChange={(e) => {
                                    setShowPayment(e.target.checked)
                                }}
                            />

                            <div className={`${showPayment ? 'block' : 'hidden'} transition-all duration-500 my-2`}>
                                <PurchaseButton price={price} scheduleId={state?.success && state?.scheduleId}/>
                            </div>
                        </div>

                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}