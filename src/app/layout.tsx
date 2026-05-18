import type { Metadata } from "next";
import { Dancing_Script, Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Beyond The View Autism Services | Seeing Every Child Beyond Their Diagnosis",
  description:
    "Beyond The View Autism Services — Where every child has infinite potential. ABA therapy and autism services in Atlanta, GA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
