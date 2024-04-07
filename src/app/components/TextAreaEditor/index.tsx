import { Bold, Italic, Link, List, ListOrdered } from "lucide-react";
import { SelectComponent } from "../Select";
import { SelectItem } from "../Select/SelectItem";
import { ComponentProps } from "react";

export interface TextAreaProps extends ComponentProps<'textarea'> { }

export function TextAreaEditor(props: TextAreaProps) {
  return (
    <div className="space-y-3">
      <div className="grid gap-3 grid-cols-2">
        <SelectComponent placeholder="Select a timezone..." defaultValue="normal">
          <SelectItem value="normal" defaultChecked text="Norma Text" />
          <SelectItem value="mad" text="Markdown" />
        </SelectComponent>
        <div className="flex items-center gap-3">
          <button type="button" className="rounded-md p- hover:bg-zinc-50">
            <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </button>
          <button type="button" className="rounded-md p- hover:bg-zinc-50">
            <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </button>
          <button type="button" className="rounded-md p- hover:bg-zinc-50">
            <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </button>
          <button type="button" className="rounded-md p- hover:bg-zinc-50">
            <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </button>
          <button type="button" className="rounded-md p- hover:bg-zinc-50">
            <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
          </button>
        </div>
      </div>
      <textarea
        {...props}
        id="bio"
        className="min-h-[120px] resize-y w-full outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-200 rounded-lg border border-zinc-300 py-2 px-3 shadow-md"
        defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development." />
    </div>
  )
}