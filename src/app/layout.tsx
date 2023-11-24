import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import NextSessionProvider from "./provider/NextSessionProvider";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";

import { ToasterProvider } from '@/components/toaster-provider'
import {NextUIProvider} from "@nextui-org/system";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lato = Lato({ weight: ["100", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pesebrera el Grillo",
  description: "Pagina web para visualizar sorteos eventos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div className="h-full bg-[#111827] overflow-auto">
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <ToasterProvider />
            <NextSessionProvider>
              <Navbar />  
                {children}
              <Footer />
            </NextSessionProvider>
            <Toaster />
          </Providers>
        </div>
      </body>
    </html>
  );
}
