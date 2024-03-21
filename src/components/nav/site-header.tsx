import Link from "next/link"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/nav/main-nav"
import { MobileNav } from "@/components/nav/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <div className="sticky px-4 md:px-12 top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex h-14 justify-between items-center">
        <MainNav />
        <MobileNav />
        <div className="md:hidden justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className=" md:hidden font-bold ">
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}
