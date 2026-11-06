import { Navbar } from "@/components";
import Billing from "@/components/billing";
import { getSchedulesWithOrderDetails, getUserAdmin } from "../actions/action";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

interface PageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}
export default async function Page({ searchParams }: PageProps) {
  const session = await auth();
  const email = session?.user?.email || '';
  const isAdmin = await getUserAdmin(email);


  const resolvedParams = await searchParams;
  const page = resolvedParams.page ? Number(resolvedParams.page) : 1;

  const schedulesResponse = await getSchedulesWithOrderDetails(email, page);
  const schedulesData = schedulesResponse?.schedules ? JSON.parse(JSON.stringify(schedulesResponse.schedules)) : [];
  const totalPages = schedulesResponse?.totalPages ?? 1;
  console.log('client side', schedulesData);
  return (
    <>
      <Navbar />
      <Billing schedules={schedulesData} IsAdmin={isAdmin?.success} totalPages={totalPages} />
    </>
  )
}

