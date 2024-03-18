import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// import { CommandMenu } from "@/components/command-menu"
// import { Icons } from "@/components/icons"
import { MainNav } from "@/components/nav/main-nav"
import { MobileNav } from "@/components/nav/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <div className="sticky px-4 md:px-12 top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex h-14 justify-between items-center">
        <MainNav />
        <MobileNav />
        <nav className="flex items-center">

          <ModeToggle />
        </nav>
      </div>
    </div>
  )
}
