import "./globals.css";
import type { Metadata } from "next";
import { Prata } from "next/font/google";
import { ClientLayout, FixedPlugin } from "@/components";
import Script from "next/script";
import Providers from "@/components/providers";
import { Toaster } from "react-hot-toast";

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Touch and Care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></Script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={prata.className}>
        <Providers>
          <ClientLayout>
            <Toaster position="bottom-center"/>
            {children}
            <FixedPlugin />
          </ClientLayout>
        </Providers>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
