/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify the weights you need
})

export const metadata: Metadata = {
  title: "Nextjs landing page 3rd assignment GIAIC",
  description: "Nextjs landing page 3rd assignment GIAIC ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}
