/* eslint-disable @next/next/no-img-element */
'use server';
import { Footer, Navbar } from "@/components";
import Transition from "../transitions";
import { getAllTransitions } from "../actions/action";


async function transitions() {
    const transitionsResponse = await getAllTransitions();
    const data = transitionsResponse?.success ? transitionsResponse.transitions : [];
    console.log(transitionsResponse);
    return (
        <>
        <Navbar/>
        <Transition transitions={data}/>
        <Footer/>
        </>
    );
}

export default transitions;