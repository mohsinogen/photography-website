import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme/theme-provider";

import { Readex_Pro } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/query-provider";
import ScrollToTop from "@/components/scroll-to-top";

const readex = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Mohsin Ansari Photography",
    default: "Mohsin Ansari Photography",
  },
  description: "Mohsin Ansari Photography",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${readex.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>{children}</QueryProvider>
          <Toaster />
          <TailwindIndicator />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
