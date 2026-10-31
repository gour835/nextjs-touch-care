'use client';
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
} from "@material-tailwind/react";
import { BriefcaseIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

export interface RazorpayDetails {
    orderId: string;
    paymentId: string;
    signature?: string;
}

export interface Service {
    _id: string;
    title: string;
    [key: string]: any;
}

export interface OrderProps {
    _id: string;
    userId: string;
    scheduleId: string | Schedule;
    amount: number;
    currency: string;
    status: 'created' | 'paid' | 'failed';
    razorpay?: RazorpayDetails;
    createdAt: string;
    updatedAt: string;
    __v?: number;
}

export interface Schedule {
    _id: string;
    userId: string;
    serviceId: Service | string;
    date: string;
    time: string;
    approved: boolean;
    paymentDone: boolean;
    createdAt: string;
    updatedAt: string;
    __v?: number;
    orderDetails?: OrderProps;
}

interface BillingCardProps {
    schedule: Schedule;
}

function BillingCard({ schedule }: BillingCardProps) {
    // 1. Extract populated service object safely
    const service = schedule && typeof schedule.serviceId === 'object' ? schedule.serviceId : null;
    const serviceTitle = service?.title || "General Service";

    // 2. Extract populated order details
    const order = schedule.orderDetails;

    // 3. Format dates and values safely
    const scheduleDate = schedule?.date ? new Date(schedule.date).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }) : 'N/A';

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
                className="rounded-lg border border-gray-300 p-4"
            >
                <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div className="border border-gray-200 p-2.5 rounded-lg">
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
                    <div className="flex items-center justify-between hidden">
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
                        {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                        <Button
                            size="sm"
                            variant="text"
                            color="red"
                            className="flex items-center gap-2"
                        >
                            <TrashIcon className="h-4 w-4 text-red-500" />
                            {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                            <Typography className="!font-semibold text-xs text-red-500 md:block hidden">
                                delete
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
}

function Billing({ schedules }: BillingProps) {
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
                        <BillingCard schedule={schedule} key={schedule._id || key} />
                    ))}
                </CardBody>
            </Card>
        </section>
    );
}

export default Billing;