import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 mt-4">
      <img src="https://github.com/salvatoreDeploy.png" className="w-10 h-10 rounded-full" alt="Henrique Araujo" />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-400">Henrique Araujo</span>
        <p className="text-sm truncate text-zinc-500">liderhenrique@gmail.com</p>
      </div>
      <Button variant="ghost" type="button">
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}