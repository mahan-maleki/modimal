import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Modimal | Fashion Online Shop",
  description: "Trend, Luxury and Modern Fashion Products with Modimal Fashion Online Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="EN-en">
      <body
        className={`${interFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
