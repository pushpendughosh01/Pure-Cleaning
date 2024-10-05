import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButtons from "@/components/FloatingButton/WhatsAppButtons";
import i18nConfig from '../../../i18nConfig';
import { dir } from 'i18next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PurelyServices",
  description: "",
};
export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}


export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale:string }
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <WhatsAppButtons/>
        {children}
      </body>
    </html>
  );
}
