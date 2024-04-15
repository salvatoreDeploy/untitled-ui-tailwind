import { formatBytes } from "@/utils/format-bytes";
import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { VariantProps, tv } from "tailwind-variants";

const fileItem = tv({
  /* base: "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4", */

  slots: {
    container: "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
    icon: "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600",
    deleteButton: ''
  },

  variants: {
    stateProgress: {
      progress: {
        container: ''
      },
      complete: {
        container: 'boder-violet-500'
      },
      error: {
        container: 'bg-error-100 border-error-300',
        icon: 'border-error-100 bg-error-200 text-error-700',
        deleteButton: 'text-error-800 hover:text-error-900'
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
            <span className="text-sm font-medium text-error-700">Upload failed, please try again</span>
            <span className="text-sm font-medium text-error-600">{name}</span>
          </div>

          <button type="button" className="text-sm font-semibold text-red-700 hover:text-error-900">Try again</button>
        </div>
      ) :
        (<div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-xs text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-200">
              <div className="h-2 flex-1 rounded-full bg-violet-600" style={{ width: stateProgress === 'complete' ? '100%' : '80%' }}></div>
            </div>
            <span className="text-sm font-medium text-zinc-700">{stateProgress === 'complete' ? '100%' : '80%'}</span>
          </div>
        </div>)}

      {stateProgress === 'complete' ?
        (<CheckCircle2 className="size-5 fill-violet-700 text-white" />) :
        (<button className={deleteButton()}>
          <Trash2 className="h-5 w-5 " />
        </button>)
      }

    </div>
  )
}