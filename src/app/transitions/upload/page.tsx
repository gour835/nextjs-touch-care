'use server';
import { getUserAdmin } from '@/app/actions/action';
import { auth } from '@/auth';
import TransitionsUploadPage from '@/components/transitionsUpload';
import { notFound } from 'next/navigation';


export default async function Page() {
  const session = await auth();
  const isUserAdminResponse = await getUserAdmin(session?.user?.email || '')
  if(!isUserAdminResponse.success){
    notFound();
  }
  return (
    <>
    <TransitionsUploadPage/>
    </>
  )
}