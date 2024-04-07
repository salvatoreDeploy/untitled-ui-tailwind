'use client'

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export interface SelectProps extends Select.SelectProps {
  children: ReactNode,
  placeholder: string
}

export function SelectComponent({ children, placeholder, ...props }: SelectProps) {
  return (
    <Select.Root {...props}>
      <Select.Trigger className="flex h-11 w-full  outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-200 items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-md data-[placeholder]:text-zinc-600">
        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content side="bottom" position="popper" sideOffset={8} className="animate-slideDownAndFade w-[--radix-select-trigger-width] z-10 rounded-lg border border-zinc-300 bg-white overflow-hidden ">
          <Select.Viewport >
            {children}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}