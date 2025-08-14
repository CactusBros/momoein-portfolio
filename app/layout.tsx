// src/app/layout.tsx
import { ThemeProvider } from "./ThemeProvider";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import BackgroundShine from "../components/BgShine"; // Import the new component
import "./globals.css";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <BackgroundShine /> 
          <Navbar />
          <SocialLinks />
          <main>{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
