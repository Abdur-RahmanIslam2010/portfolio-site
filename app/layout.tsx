import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abdur-Rahman Islam | Developer",
    template: "%s | Abdur-Rahman Islam",
  },
  description: "Developer portfolio of Abdur-Rahman Islam",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Navbar />
        {children}
        <footer className="footer">
          <div className="footer-links">
              <a href="mailto:abdelrahmanislam116@email.com" className="footer-link">
                  abdelrahmanislam116@email.com
              </a>

              <span>·</span>

              <a
                  href="https://github.com/Abdur-RahmanIslam2010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
              >
                  GitHub
              </a>
          </div>
        </footer>
        </body>
    </html>
  );
}
