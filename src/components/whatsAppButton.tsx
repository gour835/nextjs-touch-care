import Image from "next/image";

export default function WhatsAppButton() {
    const phoneNumber = "91XXXXXXXXXX"; // Replace with your 10-digit number (with country code, no + or spaces)
    const message = encodeURIComponent("Hi, I would like to know more about your beauty services.");

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-[#20BA5A] active:scale-95"
        >
            <Image
                src={'/logos/whatsapp.png'}
                width={100}
                height={100} alt={""}
            />
        </a>
    );
}