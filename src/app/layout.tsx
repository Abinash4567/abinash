import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { playfair } from "@/font/font";
import logo from "../../public/favicon.jpg"

export const metadata: Metadata = {
  title: "Abinash",
  description: "Portfolio website"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playfair.className}>
      {/* <link rel="icon" href="../../public/favicon.jpg" sizes="any" /> */}
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
