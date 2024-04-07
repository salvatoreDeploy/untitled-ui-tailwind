import { ComponentProps } from "react";

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
      <input className="flex-1 border-0 outline-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600" placeholder="Search" {...props} />
    </div>
  )
}

export function InputRoot(props: InputRootProps) {
  return (
    <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-md focus-within:border-violet-500 focus-within:ring-4 focus-within:ring-violet-200" {...props} />
  )
}
