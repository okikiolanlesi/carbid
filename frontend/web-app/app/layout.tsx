import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./nav/NavBar";

export const metadata: Metadata = {
  title: "Carbid",
  description: "Car auction site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <NavBar />
        <main className="container mx-auto p-5">{children}</main>
      </body>
    </html>
  );
}
