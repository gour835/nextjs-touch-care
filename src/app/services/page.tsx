'use server'
import { Navbar } from "@/components"
import Service from "@/components/service"
import { ServicesModel } from "@/models/services";
import { getAllServices } from "../actions/action";


export default async function Services() {
  const response = await getAllServices();
  const services = response?.success && response.data

  
  return (
    <>
      <Navbar />
      <Service services={services} />
      
    </>
  )
}

