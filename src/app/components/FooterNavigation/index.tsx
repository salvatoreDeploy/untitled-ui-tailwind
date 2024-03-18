import { Cog, LifeBuoy } from "lucide-react";
import { NavItem } from "../MainNavigation/NavItem";
import { Widget } from "./Widget";

export function FooterNavigation() {
  return (
    <div className="mt-auto flex flex-col gap-6">
      <nav className="space-y-0.5">
        <NavItem title="Support" icon={LifeBuoy} />
        <NavItem title="Settings" icon={Cog} />
      </nav>

      <Widget />
    </div>
  )
}