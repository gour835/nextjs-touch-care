/* eslint-disable @next/next/no-img-element */
'use client';
import { Footer, Navbar } from "@/components";
import Transition from "../transitions";


function Transitions() {
    

    return (
        <>
        <Navbar/>
        <Transition/>
        <Footer/>
        </>
    );
}

export default Transitions;