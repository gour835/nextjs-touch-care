'use client';
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
} from "@material-tailwind/react";
import { BriefcaseIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { TicketCheck } from "lucide-react";
import { approveSchedule } from "@/app/actions/action";
import toast from "react-hot-toast";
import { Schedule } from "@/app/lib/types";
import { SimplePagination } from "./pagination";



interface BillingCardProps {
    schedule: Schedule;
    IsAdmin: Boolean;
}

function TimeConversion(time: string) {
    let Hours = Number(time.slice(0, 2));
    let Minutes = time.slice(3);

    if (Hours <= 12) {
        return time.concat(' AM');
    } else {
        Hours -= 12;
        return `${Hours}:${Minutes} PM`;
    }

}
async function handleApprove(id: string) {
    const schedulesResponse = await approveSchedule(id);

    if (!schedulesResponse?.success) {
        return toast.error('some error occured while updating schedule');
    }

    return toast.success('Successfully updated Schedule');
}
function BillingCard({ schedule, IsAdmin }: BillingCardProps) {
    // 1. Extract populated service object safely
    const service = schedule && typeof schedule.serviceId === 'object' ? schedule.serviceId : null;
    const serviceTitle = service?.title || "General Service";
    const approved = schedule && schedule.approved;

    // 2. Extract populated order details
    const order = schedule.orderDetails;

    const ScheduleTime = TimeConversion(schedule.time);

    // 3. Format dates and values safely
    const scheduleDate = schedule?.date ? new Date(schedule.date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).concat(' ', ScheduleTime) : 'N/A';

    const isPaid = order?.status === 'paid' || schedule.paymentDone;

    const paymentDate = order?.updatedAt ? new Date(order.updatedAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }) : 'N/A';

    const paymentAmount = order?.amount
        ? (order.amount / 100).toLocaleString('en-IN', { style: 'currency', currency: order.currency || 'INR' })
        : '₹0.00';

    const subs = {
        'Amount': paymentAmount,
        'Payment Date': paymentDate,
        'Payment ID': order?.razorpay?.paymentId || 'N/A',
    };

    return (
        <>
            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
            <Card
                shadow={false}
                className={`rounded-lg border border-gray-300 p-4 ${approved ? 'bg-green-100' : 'bg-amber-100'}`}
            >
                <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className="border border-gray-300 p-2.5 rounded-lg">
                            <BriefcaseIcon className="h-6 w-6 text-gray-900" />
                        </div>
                        <div>
                            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                            <Typography variant="small" color="blue-gray" className="mb-1 font-bold">
                                {serviceTitle}
                            </Typography>
                            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                            <Typography className="!text-gray-600 text-xs font-normal">
                                Payment: {isPaid ? '✅' : '❌'}
                            </Typography>
                            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                            <Typography className="!text-gray-600 text-xs font-normal">
                                Scheduled On: {scheduleDate}
                            </Typography>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        {!approved &&
                            <>
                                {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                                <Button
                                    size="sm"
                                    variant="text"
                                    className="flex items-center gap-2 group"
                                    onClick={() => { handleApprove(schedule._id) }}
                                >
                                    <TicketCheck className="h-4 w-4 text-gray-600 group-hover:text-green-700" />
                                    {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                                    <Typography className="!font-semibold text-xs text-gray-600  group-hover:text-green-700 md:block hidden">
                                        Approve This
                                    </Typography>
                                </Button>
                            </>}

                        <div className="flex items-center gap-2 uppercase">
                            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                            <Typography className={`!font-semibold text-xs text-gray-600 md:block hidden `}>
                                {approved ? 'Approved' : 'Approval Pending'}
                            </Typography>
                        </div>
                        {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                        <Button
                            size="sm"
                            variant="text"
                            className="flex items-center gap-2"
                        >
                            <PencilIcon className="h-4 w-4 text-gray-600" />
                            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                            <Typography className="!font-semibold text-xs text-gray-600 md:block hidden">
                                Edit
                            </Typography>
                        </Button>

                    </div>
                </div>
                <div>
                    {Object.entries(subs).map(([key, value]) => (
                        <div className="flex gap-1" key={key}>
                            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                            <Typography className="mb-1 text-xs !font-medium !text-gray-600">
                                {key}:
                            </Typography>
                            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                            <Typography
                                className="text-xs !font-bold"
                                color="blue-gray"
                            >
                                {value}
                            </Typography>
                        </div>
                    ))}
                </div>
            </Card>
        </>
    );
}

interface BillingProps {
    schedules: Schedule[]; // Expecting an array of Schedules since aggregation returns schedules with orderDetails
    IsAdmin: Boolean;
    totalPages: number
}

function Billing({ schedules, IsAdmin, totalPages }: BillingProps) {
    return (
        <section className="max-w-5xl !mx-auto px-8 py-20 w-full">
            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
            <Card shadow={false}>
                {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded-none flex gap-2 flex-col md:flex-row items-start !justify-between"
                >
                    <div className="w-full mb-2">
                        {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                        <Typography className="!font-bold" color="blue-gray">
                            Service Information
                        </Typography>
                        {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                        <Typography
                            className="mt-1 !font-normal !text-gray-600"
                            variant="small"
                        >
                            View and update your Schedule and Service details.
                        </Typography>
                    </div>
                </CardHeader>
                {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                <CardBody className="flex flex-col gap-4 !p-4">
                    {schedules.map((schedule, key) => (
                        <BillingCard IsAdmin={IsAdmin} schedule={schedule} key={schedule._id || key} />
                    ))}
                </CardBody>
            </Card>
            <div className="w-full flex justify-center">
                <SimplePagination totalPages={totalPages} />

            </div>
        </section>
    );
}

export default Billing;