import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ToastContainer } from "react-toastify";

const Jetbrains_Mono = JetBrains_Mono({ 
   subsets: ["latin"],
   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
   variable: '--font-jetbrainsMono'
  });

export const metadata = {
  title: "Abhi's Portfolio",
  description: "Created using Next.Js & Framer-Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Jetbrains_Mono.variable}>
        <Header />
        <StairTransition />
        <PageTransition >{children}</PageTransition>
        <ToastContainer position="top-right"/>
        </body>
    </html>
  );
}
