import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: `${company.nameKo} | 오일씰 · 패킹 · 오링 전문`,
    template: `%s | ${company.nameKo}`,
  },
  description: company.description,
  keywords: [
    "오일씰",
    "오일실",
    "패킹",
    "오링",
    "O-Ring",
    "실링",
    "씨오에스씰",
    "COS SEAL",
    "NAK",
    "NOK",
    "유압씰",
  ],
  openGraph: {
    title: `${company.nameKo} | 오일씰 · 패킹 · 오링 전문`,
    description: company.description,
    type: "website",
    locale: "ko_KR",
    siteName: company.nameKo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body className="flex min-h-full flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
