import { getService, getServiceTitles } from "@/app/actions/action";
import { auth } from "@/auth";
import { Navbar } from "@/components";
import Checkout from "@/components/checkout";
import { ServiceModel } from "@/components/service-model";
import { notFound } from "next/navigation";
import toast from "react-hot-toast";


export default async function page(props: { params: Promise<{ title: string }> }) {
    const params = await props.params;
    const title = params.title;
    const updatedTitle = title.replaceAll('-', ' ').replaceAll('%26', '&').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    const response = await getService(updatedTitle);
    if (!response?.success) {
        notFound()
    }
    const service = response.data;

    const serviceTitlesResponse = await getServiceTitles();
    if (!serviceTitlesResponse?.success) {
        notFound()
    }
    const serviceTitles = serviceTitlesResponse.data;

    return (
        <>
            <Navbar />
            <Checkout title={service?.title} sub={service?.sub} price={service?.price}>
                <ServiceModel titles={serviceTitles} titleValue={service?._id} price={service?.price}/>
            </Checkout>
        </>
    )

}