import { Navbar } from "@/components";
import Billing from "@/components/billing";
import { getOrders } from "../actions/action";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

export default async function Page() {
    const session = await auth();
    const email = session?.user?.email || '';
    const orderResponce = await getOrders(email);
    const orderData = orderResponce.orders? JSON.parse(JSON.stringify(orderResponce.orders)): [];
    console.log('client', JSON.parse(JSON.stringify(orderResponce.orders)));
  return (
    <>
    <Navbar/>
    <Billing orders={orderData} />
    </>
  )
}

