'use client';
import {
    Card,
    CardBody,
    CardHeader,
    Typography,
    Button,
} from "@material-tailwind/react";
import { BriefcaseIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";



interface BillingCardPropsType {
    title: string;
    detail: boolean;
}

function BillingCard({ title, detail }: BillingCardPropsType) {
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
                            {title}
                        </Typography>
                        {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                        <Typography
                            className="!text-gray-600 text-xs font-normal"
                            >
                            Payment: {detail ? '✅': '❌'}
                        </Typography>
                    </div>
                </div>
                <div className="flex items-center justify-between">
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
                <div className="flex gap-1">
                    {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                    <Typography className="mb-1 text-xs !font-medium !text-gray-600">
                        Payment Done On:
                    </Typography>
                    {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                    <Typography
                        className="text-xs !font-bold"
                        color="blue-gray"
                    >
                        22/33/1212
                    </Typography>
                </div>
                <div className="flex gap-1">
                    {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                    <Typography className="mb-1 text-xs !font-medium !text-gray-600">
                        Payment Done On:
                    </Typography>
                    {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                    <Typography
                        className="text-xs !font-bold"
                        color="blue-gray"
                    >
                        22/33/1212
                    </Typography>
                </div>
                <div className="flex gap-1">
                    {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                    <Typography className="mb-1 text-xs !font-medium !text-gray-600">
                        Payment Done On:
                    </Typography>
                    {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                    <Typography
                        className="text-xs !font-bold"
                        color="blue-gray"
                    >
                        22/33/1212
                    </Typography>
                </div>
                <div className="flex gap-1">
                    {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                    <Typography className="mb-1 text-xs !font-medium !text-gray-600">
                        Payment Done On:
                    </Typography>
                    {/* @ts-expect-error - Material Tailwind type mismatch fix */}
                    <Typography
                        className="text-xs !font-bold"
                        color="blue-gray"
                    >
                        22/33/1212
                    </Typography>
                </div>
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

function Billing() {
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
                    {billingCardData.map((props, key) => (
                        <BillingCard  key={key} {...props} />
                    ))}
                </CardBody>
            </Card>
        </section>
    );
}

export default Billing;
