import { Search } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "../Input/indext";

export function InputSearch() {
  return (
    <InputRoot>
      <InputPrefix>
        <Search className="h-5 w-5 text-zinc-500" />
      </InputPrefix>
      <InputControl placeholder="Search" />
    </InputRoot>
  )
}