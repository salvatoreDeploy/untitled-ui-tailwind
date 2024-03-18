import { Search } from "lucide-react";
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
      <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600" placeholder="Search" {...props} />
    </div>
  )
}

export function InputRoot(props: InputRootProps) {
  return (
    <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-md" {...props} />
  )
}
