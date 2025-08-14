import { ThemeProvider } from "./ThemeProvider";
import Navbar from "../components/Navbar";
import SocialLinks from "../components/SocialLinks";
import BackgroundShine from "../components/BgShine";
import Footer from "../components/Footer";
import "./globals.css";

// It's good practice to add metadata in your root layout
export const metadata = {
  title: "My Awesome Portfolio",
  description: "Welcome to my personal portfolio website.",
};

// The fix is to add the type annotation for the children prop
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
          <SocialLinks />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
