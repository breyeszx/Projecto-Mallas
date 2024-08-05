import { Inter } from "next/font/google";
import "./globals.css";
import { UINavbar } from "@/components/component/uinavbar";
import { Footer } from "@/components/component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Landing page SafetyNets",
  description: "seguridad para su balcon con las mejores mallas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-100">
          <UINavbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
