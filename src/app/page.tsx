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
import { getAllServices } from "./actions/action";
import { Toaster } from "react-hot-toast";


export default async function Portfolio() {
  const serviceResponse = await getAllServices();
  const services = serviceResponse?.success && serviceResponse.data
  return (
    <>
    <Toaster/>
      <Navbar/>
      <Hero />
      <Benifits/>
      {/* <SponsoredBy /> */}
      <Transformations />
      <OurStats />
      <Treatments  services={services} />
      <Testemony />
      <Faq />
      <Footer />
    </>
  );
}
