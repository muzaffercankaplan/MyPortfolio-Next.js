import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import SideBar from "../components/Layout/SideBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <SideBar />
        <div className="max-w-[1200px] mx-auto h-[90vh] pt-40 text-center flex flex-col justify-between">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
