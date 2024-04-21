import { Bold, Italic, Link, List, ListOrdered } from "lucide-react";
import { SelectComponent } from "../Select";
import { SelectItem } from "../Select/SelectItem";
import { ComponentProps } from "react";
import { Button } from "../Button";

export interface TextAreaProps extends ComponentProps<'textarea'> { }

export function TextAreaEditor(props: TextAreaProps) {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
        <SelectComponent placeholder="Select a timezone..." defaultValue="normal">
          <SelectItem value="normal" defaultChecked text="Norma Text" />
          <SelectItem value="mad" text="Markdown" />
        </SelectComponent>
        <div className="flex items-center gap-3">
          <Button type="button" variant="ghost">
            <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </Button>
          <Button type="button" variant="ghost">
            <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </Button>
          <Button type="button" variant="ghost">
            <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </Button>
          <Button type="button" variant="ghost">
            <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </Button>
          <Button type="button" variant="ghost">
            <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </Button>
        </div>
      </div>
      <textarea
        {...props}
        id="bio"
        className="min-h-[120px] resize-y w-full outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-200 rounded-lg border border-zinc-300 py-2 px-3 shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus-within:ring-violet-500/20 dark:text-zinc-100 dark:placeholder-zinc-400"
        defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development." />
    </div>
  )
}