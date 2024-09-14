import { Suspense } from "react";
import Footer from "./_components/layout/Footer";
import Header from "./_components/layout/Header";
import "./globals.css";
import Loading from "./loading";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen bg-green-50">
        <Header />
        <Suspense fallback={<Loading />}>
          <main className="flex-grow px-20">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
