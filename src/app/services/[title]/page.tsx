import { getService, getServiceTitles, getUserMobile } from "@/app/actions/action";
import { auth } from "@/auth";
import { Navbar } from "@/components";
import Checkout from "@/components/checkout";
import { ServiceModel } from "@/components/service-model";
import { notFound } from "next/navigation";



export default async function page(props: { params: Promise<{ title: string }> }) {
    const params = await props.params;
    const title = params.title;
    const updatedTitle = title.replaceAll('-', ' ').replaceAll('%26', '&').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const session = await auth();
    const ServiceResponse = await getService(updatedTitle);
    if (!ServiceResponse?.success) {
        notFound()
    }
    const service = ServiceResponse.data;

    const serviceTitlesResponse = await getServiceTitles();
    if (!serviceTitlesResponse?.success) {
        notFound()
    }
    const serviceTitles = serviceTitlesResponse.data;

    const UserMobileResponse = await getUserMobile(session?.user?.email ?? '');
    let UserMobile = ''
    if(UserMobileResponse?.success){
        UserMobile = UserMobileResponse?.mobile;
    }

    return (
        <>
            <Navbar />
            <Checkout
                title={service?.title}
                sub={service?.sub}
                price={service?.price}
            >
                <ServiceModel
                    titles={serviceTitles}
                    titleValue={service?._id}
                    price={service?.price}
                    userMobile={UserMobile}
                />
            </Checkout>
        </>
    )

}