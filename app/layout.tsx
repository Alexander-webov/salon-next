import NavBar from "./components/NavBar";
import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ServiceMarket — Beauty & Wellness booking",
  description:
    "Book beauty and wellness appointments in curated salons in New York.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} min-h-dvh flex flex-col justify-between`}
      >
        <NavBar />
        <div className="flex-1"> {children}</div>
        <Footer />
        <Toaster
          position="top-right"
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "24px",
              maxWidth: "500px",
              width: "100%",
              padding: "16px 24px",
            },
          }}
        />
      </body>
    </html>
  );
}
