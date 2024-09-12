import Footer from "./_components/layout/Footer";
import Header from "./_components/layout/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen bg-green-50">
        <Header />
        <main className="flex-grow px-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
