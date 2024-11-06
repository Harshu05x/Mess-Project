import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AppNavigationMenu } from "@/AppComponents/AppNavbar/AppNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MealSpotter",
  description: "© Harshad Madhbhave 2K24",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <AppNavigationMenu />
            <div className="max-w-screen mt-16">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
