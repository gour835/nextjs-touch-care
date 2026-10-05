'use server'
// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";
import Benifits from "./benifits";


export default async function Portfolio() {
  return (
    <>
      <Navbar/>
      <Hero />
      <Benifits/>
      {/* <SponsoredBy /> */}
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
      <Footer />
    </>
  );
}
