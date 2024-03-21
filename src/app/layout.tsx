import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/nav/site-header";
// import { SiteFooter } from "@/components/nav/site-footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { cn } from "@/lib/utils";
import { fontSans } from "@/lib/fonts"
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Save the Date",
  description: "Please tell us if you can come or not to our wedding",
};

interface RootLayoutProps {
  children: React.ReactNode;
}


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background antialiased",
            fontSans
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
                <SiteHeader />
                <main className="flex-1">{children}</main>
                {/* <SiteFooter /> */}
              </div>
            </div>
            <TailwindIndicator />
            <Toaster position="bottom-center" expand={true} richColors />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}