"use client"

import Link from "next/link"
import * as React from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "About Us",
    href: "/about",
    description:
      "Learn about our purpose-driven approach to American Private Equity.",
  },
  {
    title: "Agriculture",
    href: "/agriculture",
    description:
      "Cultivating the future of America through high-yield investments in food sovereignty.",
  },
  {
    title: "Leadership",
    href: "/leadership",
    description:
      "Meet the team with decades of experience in finance and development.",
  },
]

export function Header() {
  return (
    <div className="w-full flex justify-center border-b border-neutral-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container flex items-center justify-between py-4 px-6 md:px-12">
            <Link href="/" className="flex items-center gap-2">
                 <div className="relative w-8 h-8">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/growshare-capital.firebasestorage.app/o/Logo%2FGrowshare%20Capital%20Transparent.png?alt=media&token=b53577e6-eb64-409d-aa7a-e9aa4fe01c49"
                        alt="GrowShare Logo"
                        fill
                        className="object-contain"
                    />
                 </div>
                 <span className="font-serif text-lg font-bold tracking-tight">GrowShare</span>
            </Link>
            
            <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <NavigationMenuTrigger>Divisions</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                        <NavigationMenuLink asChild>
                        <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-neutral-100/50 to-neutral-100 p-6 no-underline outline-none focus:shadow-md"
                            href="/agriculture"
                        >
                            <div className="mb-2 mt-4 text-lg font-medium">
                            Agriculture
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                            Our flagship division focused on resilient American food systems.
                            </p>
                        </a>
                        </NavigationMenuLink>
                    </li>
                    <ListItem href="/about" title="About">
                        Our origin story and investment philosophy.
                    </ListItem>
                    <ListItem href="/agriculture/alabama-livestock" title="Live Project">
                        Alabama Livestock & Co-Housing Initiative.
                    </ListItem>
                    <ListItem href="/contact" title="Contact">
                        Get in touch with our investment team.
                    </ListItem>
                    </ul>
                </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden md:flex">
                 <Link href="/contact" className="text-[10px] tracking-[0.2em] uppercase font-bold border border-black px-6 py-2 hover:bg-black hover:text-white transition-all">
                    Invest
                 </Link>
            </div>
        </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
