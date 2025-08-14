// src/app/layout.tsx

import { ThemeProvider } from "./ThemeProvider";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import BackgroundShine from "../components/BgShine";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "My Awesome Portfolio",
  description: "Welcome to my personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <BackgroundShine />
          <Navbar />
          <div className="hidden md:block">
            <SocialLinks />
          </div>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}