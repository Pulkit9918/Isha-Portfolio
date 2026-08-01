import { Sora, Geist } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const clash = Sora({ subsets: ["latin"], variable: "--font-clash" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata = {
  title: "Isha — Social Media Marketing",
  description:
    "Social media strategist building brands people notice, trust, and remember. Strategy, content, and campaigns with measurable results.",
  openGraph: {
    title: "Isha — Social Media Marketing",
    description: "Social media strategist building brands people remember.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${clash.variable} ${geist.variable} bg-shell text-ink font-body antialiased`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}