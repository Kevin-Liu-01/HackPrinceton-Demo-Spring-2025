import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Young_Serif } from "next/font/google";

const youngserif = Young_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-young-serif",
  weight: ["400"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "HackPrinceton",
  description: "HackPrinceton Spring 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://use.typekit.net/vxq6req.css"></link>
      <body className={`${youngserif.variable} antialiased`}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
