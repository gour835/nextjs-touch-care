import { Button } from "@material-tailwind/react";
import React from "react";
interface NavButtonLGProps {
    onClick?: () => void;
    children: React.ReactNode;
    border?: string;
    active? : boolean


}

function NavButtonLG({ onClick, active, children, border = 'black' }: NavButtonLGProps) {
    return (
        <Button
            color="white"
            variant="text"
            onClick={onClick}
            className={`relative group text-[#4A1525] overflow-hidden hover:bg-brown-900/5 ${active? 'bg-brown-900/15': ''}`} onResize={undefined} onResizeCapture={undefined}>
            <span className="relative z-10">
                {children}
            </span>
            <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-${border} scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100`} />
        </Button>
    )
}

export default NavButtonLG