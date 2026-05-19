import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hello World App",
  description: "A simple app displaying Hello World",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
