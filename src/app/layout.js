import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const dm = DM_Sans({ subsets: ["latin"], variable: "--font-dm" });

export const metadata = {
  title: "Isha — Social Media Marketing · Issue 01",
  description:
    "Social media strategist building brands people notice, trust, and remember. Strategy, content, and campaigns with measurable results.",
  openGraph: {
    title: "Isha — Social Media Marketing · Issue 01",
    description: "Social media strategist building brands people remember.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${dm.variable} bg-ink text-ink font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}