/* eslint-disable @next/next/no-img-element */
'use server';
import { Footer, Navbar } from "@/components";
import Testimonials from "../testimonials";
import { getTestimonials } from "../actions/action";


interface PageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

async function Transitions({searchParams}: PageProps) {
    const resolvedParams = await searchParams;
    const page = resolvedParams.page ? Number(resolvedParams.page) : 1;
    const testimonialsResponse = await getTestimonials(page);
    const data = testimonialsResponse?.success ? testimonialsResponse.testimonials : [];
    const totalPages = testimonialsResponse?.success && testimonialsResponse.totalPages;
    console.log(testimonialsResponse);

    return (
        <>
            <Navbar />
            <Testimonials testimonialsData={data} totalPages={totalPages || 0}/>
            <Footer />
        </>
    );
}

export default Transitions;