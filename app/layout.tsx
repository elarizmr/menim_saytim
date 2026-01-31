"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { CartProvider } from "./context/CartContsxt";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith("/admin");

  return (
    <html lang="az">
      <body className={inter.className}>
        {}
        <CartProvider>
          {!isAdminPage && <Header />}
          <main className="min-h-screen">
            {children}
          </main>
          {!isAdminPage && <Footer />}
        </CartProvider>
        {}
      </body>
    </html>
  );
}