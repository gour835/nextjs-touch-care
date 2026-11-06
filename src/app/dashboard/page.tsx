import { Navbar } from "@/components";
import Billing from "@/components/billing";
import { getSchedulesWithOrderDetails, getUserAdmin } from "../actions/action";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

export default async function Page() {
    const session = await auth();
    const email = session?.user?.email || '';
    const isAdmin = await getUserAdmin(email);
    const schedulesResponse = await getSchedulesWithOrderDetails(email);
    const schedulesData = schedulesResponse?.schedules? JSON.parse(JSON.stringify(schedulesResponse.schedules)): [];
    console.log('client side', schedulesData);
  return (
    <>
    <Navbar/>
    <Billing schedules={schedulesData} IsAdmin={isAdmin?.success} />
    </>
  )
}

