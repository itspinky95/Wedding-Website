"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"

// import { docsConfig } from "@/config/docs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const docsConfig = {
  sidebarNav: [
    {
      title: "Our Love Story",
      items: [
        {
          title: "Tinder",
          href: "/lovestory#tinder",
          description:
            "We Both Swipped Right.",
        },
        {
          title: "First Meet",
          href: "/lovestory#firstmeet",
          description:
            "We met for the first time because of being lonely and a panda hug me pen",
        },
        {
          title: "First Date",
          href: "/lovestory#firstdate",
          description:
            "A lovely meal out on a Saturday afternoon where we were drunk before we even made it to the restaurant.",
        },
        {
          title: "Family Got Bigger",
          href: "/loveStory#family",
          description: "Missing his Siberian Husky Deanna Stupidly agree to let Scott get an American Akita that they then calle Hunterr.",
        },
        {
          title: "Engagement - She Said Yes!!",
          href: "/lovestory#yes",
          description:
            "During a lovely evening at a families house. Scott thought no better time and no better place to embarrass Dee, asking her to marry him..",
        },
        {
          title: "More",
          href: "/ourlovestory",
          description:
            "The story doesn't start here, but the story doesn't end here either.",
        },
      ],
    },
    {
      title: "RSVP",
      items: [
        {
          title: "We Can't Wait to See You",
          href: "/contact-us",
          description:
            "If you would love to see these two idiots get married and. start the rest of their lives in holy matrimony.",
        },
        {
          title: "Sorry you will be missed",
          href: "/contact-us",
          description:
            "If you are unable to join us on. the day, please know that we wish you the best and that we wish you were there.",
        },
      ],
    },
    {
      title: "Wedding Details",
      items: [
        {
          title: "Wedding Venue",
          href: "/wedding-details#venue",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Timing",
          href: "/wedding-details#timing",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Location to stay",
          href: "/wedding-details#location",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
      ],
    },
    {
      title: "Extra",
      items: [
        {
          title: "Music",
          href: "/music",
          description:
            "If you know us and know songs we love, you can request a song.",
        },
        {
          title: "Food Menu",
          href: "/food",
          description:
            "Food Menu for the day, if you don't like it, tough.",
        },
        {
          title: "Activities",
          href: "/activities",
          
          description:
            "We all know Scott is a big kid so we have a kid & adult Bouncy castle, along with garden game and a room for the kids to get away to.",
        },
        {
          title: "Games",
          href: "/games",
          description: "Stupid Wedding Games.",
        },
        {
          title: "Gallery",
          href: "/gallery",
          description: "A collection of photos from our Lifes.",
        },
        {
          title: "Tabs",
          href: "/docs/primitives/tabs",
          description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
            label: "New",
            disabled: true,
        },
        {
          title: "Tooltip",
          href: "/docs/primitives/tooltip",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
            disabled: true,
        },
      ],
    },
  ],

}

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <MobileLink
          href="/"
          className="flex items-center"
          onOpenChange={setOpen}
        >
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            
          </div>
          <div className="flex flex-col space-y-2">
            {docsConfig.sidebarNav.map((item, index) => (
              <div key={index} className="flex flex-col space-y-3 pt-6">
                <h4 className="font-medium">{item.title}</h4>
                {item?.items?.length &&
                  item.items.map((item) => (
                    <React.Fragment key={item.href}>
                      {!item.disabled &&
                        (item.href ? (
                          <MobileLink
                            href={item.href}
                            onOpenChange={setOpen}
                            className="text-muted-foreground"
                          >
                            {item.title}
                            {item.label && (
                              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                {item.label}
                              </span>
                            )}
                          </MobileLink>
                        ) : (
                          item.title
                        ))}
                    </React.Fragment>
                  ))}
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
