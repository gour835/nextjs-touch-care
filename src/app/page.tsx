'use server'
// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import Transformations from "./transformations";
import OurStats from "./our-stats";
import Testemony from "./testemony";
import Faq from "./faq";
import Benifits from "./benifits";
import Treatments from "./treatments";
import { getAllServices, getTestimonials } from "./actions/action";



export default async function Portfolio() {
  const serviceResponse = await getAllServices();
  const services = serviceResponse?.success && serviceResponse.data

  const testimonialsResponse = await getTestimonials(1);
  const testimonialsData = testimonialsResponse?.success && testimonialsResponse.testimonials;

  
  return (
    <>
    
      <Navbar/>
      <Hero />
      <Benifits/>
      {/* <SponsoredBy /> */}
      <Transformations />
      <OurStats />
      <Treatments  services={services} />
      <Testemony testimonialsData={testimonialsData} />
      <Faq />
      <Footer />
    </>
  );
}
