import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10", className)}
      {...props}
    />
  )
}

export { Skeleton }
