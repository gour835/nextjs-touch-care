/* eslint-disable @next/next/no-img-element */
'use server';
import { Footer, Navbar } from "@/components";
import Transition from "../transitions";
import { getAllTransitions } from "../actions/action";

interface PageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

async function transitions({searchParams}: PageProps) {
    const resolvedParams = await searchParams;
    const page = resolvedParams.page ? Number(resolvedParams.page) : 1;
    const transitionsResponse = await getAllTransitions(page);
    const data = transitionsResponse?.success ? transitionsResponse.transitions : [];
    const totalPages = transitionsResponse?.success && transitionsResponse.totalPages;
    console.log(transitionsResponse);
    return (
        <>
        <Navbar/>
        <Transition transitions={data} totalPages={totalPages || 3}/>
        <Footer/>
        </>
    );
}

export default transitions;