"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MoveUpRightIcon } from "lucide-react"


export function NavMenu() {
  return (
    <NavigationMenu className="bg-amber-400">
      <NavigationMenuList className="bg-zinc-900">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-zinc-400 rounded-none"></NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-none bg-zinc-700">
            <ul className="text-zinc-200 rounded-none">
              <ListItem href="/projects" title="Projects">
              </ListItem>
              <ListItem href="/writeups" title="Writeups">
              </ListItem>

              <NavigationMenuLink asChild>
                 <div className="flex flex-col gap-1 text-sm">
                  <a href="" className="leading-none font-medium flex">
                    Github
                    <MoveUpRightIcon size={15}/>
                  </a>
                </div>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                 <div className="flex flex-col gap-1 text-sm">
                  <a href="" className="leading-none font-medium flex">
                    LinkedIn
                    <MoveUpRightIcon size={15}/>
                  </a>
                </div>
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium flex">{title}{children}</div>
            {/* <div className="line-clamp-2 text-muted-foreground">{children}</div> */}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
