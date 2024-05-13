import { Inter } from "next/font/google";
import "./globals.css";
import ClientSideProviderTest from "./Components/clientSideProviderTest";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Next.js 14 Homepage",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
          <div className="">
            <Navbar />
            {children}
            <Footer />
          </div>
        {/* <ClientSideProviderTest/> */}
      </body>
    </html>
  );
}