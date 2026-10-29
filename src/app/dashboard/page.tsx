import { Navbar } from "@/components";
import Billing from "@/components/billing";
import { getOrders } from "../actions/action";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

export default async function Page() {
    const session = await auth();
    const email = session?.user?.email || '';
    const orderResponce = await getOrders(email);
    console.log('client', orderResponce.orders?.slice(0, 1));
  return (
    <>
    <Navbar/>
    <Billing/>
    </>
  )
}

