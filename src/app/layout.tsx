import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "لوحة التحكم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body>{children}</body>
    </html>
  );
}
