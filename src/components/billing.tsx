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

export interface Schedule {
  _id: string;
  userId: string;
  serviceId: Service | string;
  date: string;
  time: string;
  paymentDone: boolean;
  [key: string]: any; 
}

export interface OrderProps {
  _id: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'paid' | 'pending' | 'failed'; 
  razorpay?: RazorpayDetails;
  scheduleId?: Schedule | string; 
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

interface BillingCardProps {
    order: OrderProps;
}

function BillingCard({order} : BillingCardProps) {
    const schedule = typeof order.scheduleId === 'object' ? order.scheduleId : null;
    const service = schedule && typeof schedule.serviceId === 'object' ? schedule.serviceId : null;
    const scheduleDate =schedule?.date ? new Date(schedule?.date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
}): 'N/A';
    
    const serviceTitle = service?.title || "General Service";
    const isPaid = order.status === 'paid';
    const PaymentDate = schedule?.date ? new Date(order.updatedAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }) : 'N/A';
    const PaymentAmount = (order.amount / 100).toLocaleString('en-IN', { style: 'currency', currency: order.currency || 'INR' });

    const subs = {
    'Amount': PaymentAmount,
    'Payment Date': PaymentDate,
    'Payment ID': order.razorpay?.paymentId || 'N/A',
};
    return (

        <Card
            shadow={false}
            className="rounded-lg border border-gray-300 p-4" onResize={undefined} onResizeCapture={undefined}        >
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
                        <Typography
                            className="!text-gray-600 text-xs font-normal"
                            >
                            Payment: {isPaid ? '✅': '❌'}
                        </Typography>
                        {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                        <Typography
                            className="!text-gray-600 text-xs font-normal"
                            >
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
    );
}

const billingCardData = [
    {
        title: "SERVICE TYPE: ex('Advanced Skin Treatment')",
        detail: true,
        
    },

];

function Billing({orders}: {orders: OrderProps[]}) {
    return (
        <section className="max-w-5xl !mx-auto px-8 py-20 w-full">
            <Card shadow={false} onResize={undefined} onResizeCapture={undefined}>
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
                    {orders.map((order, key) => (
                        <BillingCard order={order} key={key}  />
                    ))}
                </CardBody>
            </Card>
        </section>
    );
}

export default Billing;
