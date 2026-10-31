import { Navbar } from "@/components";
import Billing from "@/components/billing";
import { getOrders, getSchedulesWithOrderDetails } from "../actions/action";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

export default async function Page() {
    const session = await auth();
    const email = session?.user?.email || '';
    const orderResponce = await getOrders(email);
    const orderData = orderResponce.orders? JSON.parse(JSON.stringify(orderResponce.orders)): [];

    const schedulesResponse = await getSchedulesWithOrderDetails(email);
    const schedulesData = schedulesResponse?.schedules? JSON.parse(JSON.stringify(schedulesResponse.schedules)): [];
    console.log('client side', schedulesData);
  return (
    <>
    <Navbar/>
    <Billing schedules={schedulesData} />
    </>
  )
}

