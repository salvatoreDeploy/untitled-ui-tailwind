import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge"

interface InputPrefixProps extends ComponentProps<'div'> { }
interface InputControlProps extends ComponentProps<'input'> { }
interface InputRootProps extends ComponentProps<'div'> { }



export function InputPrefix(props: InputPrefixProps) {
  return (
    <div {...props} />
  )
}

export function InputControl(props: InputControlProps) {
  return (
    <div className="flex items-center gap-2">
      <input className="flex-1 border-0 outline-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 dark:text-zinc-100 dark:placeholder-zinc-400"  placeholder=" Search" {...props} />
    </div>
  )
}

export function InputRoot(props: InputRootProps) {
  return (
    <div className={twMerge(
      "flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-md ",
      "focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-200",
      "dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20",
      props.className
    )} {...props} />
  )
}
