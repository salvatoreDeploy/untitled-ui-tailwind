import { FooterNavigation } from "../FooterNavigation";
import { MainNavigation } from "../MainNavigation";
import { UserProfileWidget } from "../UserProfile";
import { InputSearch } from "./InputSearch";
import { Logo } from "./Logo";

export default function Sidebar() {
  return (
    <aside className='flex flex-col gap-6 border-r border-zinc-200 px-5 py-8'>
      <Logo />
      <InputSearch />
      <MainNavigation />
      <FooterNavigation />
      <UserProfileWidget />
    </aside>
  )
}