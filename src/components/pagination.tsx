import React, { useEffect } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SimplePagination({totalPages}: {totalPages: number}) {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const pathname = usePathname();
    const { replace } = useRouter();
    const [active, setActive] = React.useState(() => {
        const pageNumber = searchParams.get('page');
        return pageNumber && Number(pageNumber) > 0 ? Number(pageNumber) : 1;
    });

    useEffect(() => {
        const pageNumber = searchParams.get('page');
        const pageNum = pageNumber ? Number(pageNumber) : 1;
        if (pageNum > 0 && pageNum !== active) {
            setActive(pageNum);
        }
    }, [searchParams]);

    const createQueryString = (name: string, value: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, `${value}`);
        return params.toString();
    };

    const next = () => {
        if (active >= totalPages) return;
        const newPage = active + 1;
        setActive(newPage);
        replace(`${pathname}?${createQueryString('page', newPage)}`);
    };

    const prev = () => {
        if (active <= 1) return;
        const newPage = active - 1;
        setActive(newPage);

        const params = new URLSearchParams(searchParams.toString());
        if (newPage === 1) {
            params.delete('page'); // Clean up URL if it's page 1
        } else {
            params.set('page', `${newPage}`);
        }
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div className={`flex items-center gap-8 ${totalPages <= 1 ? 'hidden': ''}`}>
            {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
            <IconButton
                size="sm"
                variant="outlined"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
            <Typography color="gray" className="font-normal">
                Page <strong className="text-gray-900">{active}</strong> of{" "}
                <strong className="text-gray-900">{totalPages}</strong>
            </Typography>
            {/* @ts-expect-error - Suppresses all obsolete Material Tailwind event props */}
            <IconButton
                size="sm"
                variant="outlined"
                onClick={next}
                disabled={active === totalPages? true: false}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
        </div>
    );
}