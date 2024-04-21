"use client"

import { Menu } from "lucide-react";
import { Button } from "../Button";
import { FooterNavigation } from "../FooterNavigation";
import { MainNavigation } from "../MainNavigation";
import { UserProfileWidget } from "../UserProfile";
import { InputSearch } from "./InputSearch";
import { Logo } from "./Logo";
import * as Collapsible from '@radix-ui/react-collapsible'

export default function Sidebar() {
  return (
    <Collapsible.Root className='fixed data-[state=open]:bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b dark:bg-zinc-900 dark:border-zinc-800 border-zinc-200 bg-white p-4 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0'>
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.CollapsibleTrigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="size-6" />
          </Button>
        </Collapsible.CollapsibleTrigger>
      </div>
      <Collapsible.CollapsibleContent forceMount className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex">
        <InputSearch />
        <MainNavigation />
        <FooterNavigation />
        <UserProfileWidget />
      </Collapsible.CollapsibleContent>
    </Collapsible.Root>
  )
}