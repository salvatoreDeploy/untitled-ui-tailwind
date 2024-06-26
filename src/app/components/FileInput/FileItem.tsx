import { formatBytes } from "@/utils/format-bytes";
import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { VariantProps, tv } from "tailwind-variants";

const fileItem = tv({
  /* base: "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4", */

  slots: {
    container: "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
    icon: "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500",
    deleteButton: ''
  },

  variants: {
    stateProgress: {
      progress: {
        container: 'dark:border-zinc-700'
      },
      complete: {
        container: 'border-violet-500 dark-border-violet-400/30'
      },
      error: {
        container: 'bg-error-100 border-error-300 dark:bg-error-500/5 dark-border-error-500/30',
        icon: 'border-error-100 bg-error-200 text-error-700 dark:bg-error-500/5 dark:border-error-500/30 dark:text-error-400',
        deleteButton: 'text-error-800 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300'
      }
    }
  },

  defaultVariants: {
    stateProgress: 'progress'
  }
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, stateProgress }: FileItemProps) {

  const { container, icon, deleteButton } = fileItem({ stateProgress })

  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>

      {stateProgress === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-error-700 dark:text-error-400">Upload failed, please try again</span>
            <span className="text-sm font-medium text-error-600 dark:text-error-500">{name}</span>
          </div>

          <button type="button" className="text-sm font-semibold text-red-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300">Try again</button>
        </div>
      ) :
        (<div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">{name}</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-200 dark:bg-zinc-600">
              <div className="h-2 flex-1 rounded-full bg-violet-600 dark:bg-violet-500" style={{ width: stateProgress === 'complete' ? '100%' : '80%' }}></div>
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-500">{stateProgress === 'complete' ? '100%' : '80%'}</span>
          </div>
        </div>)}

      {stateProgress === 'complete' ?
        (<CheckCircle2 className="size-5 fill-violet-700 text-white" />) :
        (<button className={deleteButton()}>
          <Trash2 className="h-5 w-5 dark:text-zinc-600" />
        </button>)
      }

    </div>
  )
}