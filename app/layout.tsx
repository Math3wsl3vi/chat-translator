import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import ClientProviders from "@/components/Clientprovider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chat Translator",
  description: "Friendly neighbourhood spiderman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProviders>
    <html lang="en">
      <body
        className='flex flex-col min-h-screen'
      >
        <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange>
        <Header/>
        </ThemeProvider>
        {children}
      </body>
    </html>
    </ClientProviders>
  );
}
