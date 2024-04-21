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
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">Settings</h1>

      <MenuTabs />

      <div className="mt-8 flex flex-col">

        <div className=" flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Update your photo and personal details here.</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Save</Button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700" action="">
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue='Henrique' />
              </InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label htmlFor="lastName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only">Last name</label>
                <InputRoot>
                  <InputControl id="lastName" defaultValue='Araujo' />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className="flex flex-col pt-5 gap-3 lg:grid lg:grid-cols-form">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">E-mail address</label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl id="email" type="email" defaultValue='email@teste.com' />
            </InputRoot>
          </div>

          <div className="flex flex-col pt-5 gap-3 lg:grid lg:grid-cols-form">
            <label htmlFor="yourPhoto" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Your photo
              <span className="text-sm mt-0.5 text-zinc-500 font-normal block">This will be displayed on your profile.</span>
            </label>

            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>

          </div>

          <div className="flex flex-col pt-5 gap-3 lg:grid lg:grid-cols-form ">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Role</label>
            <InputRoot>
              <InputControl id="role" defaultValue='Developer' />
            </InputRoot>
          </div>

          <div className="flex flex-col pt-5 gap-3 lg:grid lg:grid-cols-form ">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Country
            </label>
            <SelectComponent placeholder="Select a country">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="Estados Unidos" />
              <SelectItem value="jp" text="Japão" />
            </SelectComponent>
          </div>

          <div className="flex flex-col pt-5 gap-3 lg:grid lg:grid-cols-form ">
            <label htmlFor="timezone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Timezone
            </label>
            <SelectComponent placeholder="Select a timezone...">
              <SelectItem value="br" text="America/Sao-Paulo Time (UTC-03:00:00)" />
              <SelectItem value="us" text="Pacific Standard Time (UTC-11:00:00)" />
              <SelectItem value="jp" text="Japao/China Time (UTC-14:00:00)" />
            </SelectComponent>
          </div>

          <div className="flex flex-col pt-5 gap-3 lg:grid lg:grid-cols-form ">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <span className="text-sm mt-0.5 text-zinc-500 font-normal block">Write a short introduction.</span>
            </label>
            <TextAreaEditor />
          </div>

          <div className="flex flex-col pt-5 gap-3 lg:grid lg:grid-cols-form ">
            <label htmlFor="portifolioProjects" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
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
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary">Save</Button>
          </div>
        </form>
      </div>
    </>
  )
}
