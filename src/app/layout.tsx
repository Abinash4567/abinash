import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from "geist/font/sans";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Abinash",
  description: "Portfolio website"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${GeistSans.className}`}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
