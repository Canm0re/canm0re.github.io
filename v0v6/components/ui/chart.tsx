import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip"

export interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface ChartTooltipProps {
  active?: boolean
  payload?: Array<{
    name: string
    value: number
    payload: Record<string, string | number>
  }>
  config?: ChartConfig
}

export function ChartTooltipContent({
  active,
  payload,
  config,
}: ChartTooltipProps) {
  if (!active || !payload?.length || !config) {
    return null
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      {payload.map(({ name, value }, i) => {
        const { label, color } = config[name] ?? {
          label: name,
          color: "currentColor",
        }

        return (
          <div key={i} className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full" style={{ background: color }} />
            <span className="font-medium">{label}:</span>
            <span>{value}</span>
          </div>
        )
      })}
    </div>
  )
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  config: ChartConfig
  asChild?: boolean
}

export function ChartContainer({
  children,
  config,
  asChild,
  ...props
}: ChartContainerProps) {
  const Comp = asChild ? Slot : "div"

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Comp {...props}>{children}</Comp>
        </TooltipTrigger>
        <TooltipContent>
          <ChartTooltipContent config={config} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
} 