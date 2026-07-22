import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/layout/Footer";
import SocialFollowPopup from "@/components/home/SocialFollowPopup";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.raptivio.com"),
  title: "Raptivio | An AI-Powered Ecosystem for Business Growth",
  description:
    "Raptivio combines AI automation, performance marketing, lead generation, websites and custom software to build intelligent growth systems for ambitious businesses.",
  applicationName: "Raptivio",
  authors: [{ name: "Raptivio", url: "https://www.raptivio.com" }],
  creator: "Raptivio",
  publisher: "Raptivio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5MFHFZW3');
          `}
        </Script>
      </head>

      <body className="font-sans antialiased bg-[#F8F9FC]">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5MFHFZW3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
        <Footer />
        <SocialFollowPopup />

        <Script
          id="tawk-to"
          strategy="afterInteractive"
          src="https://embed.tawk.to/6a54915c99e61d1d501ee296/1jtd5fkpj"
          charSet="UTF-8"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
