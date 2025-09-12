import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Applash — Web apps to mobile apps",
  description: "Applash converts any web app into a polished mobile experience for iOS and Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
