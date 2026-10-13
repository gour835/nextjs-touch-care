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


export default async function Portfolio() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Benifits/>
      {/* <SponsoredBy /> */}
      <Transformations />
      <OurStats />
      <Treatments />
      <Testemony />
      <Faq />
      <Footer />
    </>
  );
}
