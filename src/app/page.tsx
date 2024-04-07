import { Mail, UploadCloud, User } from "lucide-react";
import { InputControl, InputPrefix, InputRoot } from "./components/Input/indext";
import { MenuTabs } from "./components/MenuTabs";
import * as FileInput from '@/app/components/FileInput'
import { SelectComponent } from "./components/Select";
import { SelectItem } from "./components/Select/SelectItem";
import { TextAreaEditor } from "./components/TextAreaEditor";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <MenuTabs />

      <div className="mt-8 flex flex-col">

        <div className=" flex items-center justify-between pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save</Button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200" action="">
          <div className="grid gap-3 grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700">Name</label>
            <div className="grid gap-6 grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue='Henrique' />
              </InputRoot>
              <InputRoot>
                <InputControl defaultValue='Araujo' />
              </InputRoot>
            </div>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700">E-mail address</label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="email" type="email" defaultValue='email@teste.com' />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="yourPhoto" className="text-sm font-medium text-zinc-700">
              Your photo
              <span className="text-sm mt-0.5 text-zinc-500 font-normal block">This will be displayed on your profile.</span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>

          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">Role</label>
            <InputRoot>
              <InputControl id="role" defaultValue='Developer' />
            </InputRoot>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700">
              Country
            </label>
            <SelectComponent placeholder="Select a country">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="Estados Unidos" />
              <SelectItem value="jp" text="Japão" />
            </SelectComponent>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
              Timezone
            </label>
            <SelectComponent placeholder="Select a timezone...">
              <SelectItem value="br" text="America/Sao-Paulo Time (UTC-03:00:00)" />
              <SelectItem value="us" text="Pacific Standard Time (UTC-11:00:00)" />
              <SelectItem value="jp" text="Japao/China Time (UTC-14:00:00)" />
            </SelectComponent>
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="text-sm mt-0.5 text-zinc-500 font-normal block">Write a short introduction.</span>
            </label>
            <TextAreaEditor />
          </div>

          <div className="grid gap-3 grid-cols-form pt-5">
            <label htmlFor="portifolioProjects" className="text-sm font-medium text-zinc-700">
              Portfolio projects
              <span className="text-sm mt-0.5 text-zinc-500 font-normal block">Share a few snippets of your work.</span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.Control multiple />
              <FileInput.FileList />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-1 pt-5">
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
