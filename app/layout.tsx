import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raptivio",
  description: "AI Powered Growth Ecosystem",
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
      <body className="font-sans antialiased bg-[#F8F9FC]">
        {children}
        <Footer />
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
