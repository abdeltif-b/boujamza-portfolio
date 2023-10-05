import "./globals.css";
import { CustomToaster } from "@/components/base/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import MenuBar from "@/components/menubar";
import ThemeSwitch from "@/components/theme-switch";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio created by Abdeltif",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MenuBar />
          {children}
          <Footer />
          <ThemeSwitch />
          <CustomToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
