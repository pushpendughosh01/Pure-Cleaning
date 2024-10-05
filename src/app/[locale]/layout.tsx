import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButtons from "@/components/FloatingButton/WhatsAppButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PurelyServices",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WhatsAppButtons/>
        {children}
      </body>
    </html>
  );
}
