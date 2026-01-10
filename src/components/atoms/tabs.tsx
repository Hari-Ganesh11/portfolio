"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

/* ---------------- Tabs Root ---------------- */

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

/* ---------------- Tabs List ---------------- */

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        `
        relative inline-flex w-fit items-center
        border-b border-border
        `,
        className
      )}
      {...props}
    />
  )
}

/* ---------------- Tabs Trigger ---------------- */

type TabsTriggerProps =
  React.ComponentProps<typeof TabsPrimitive.Trigger> & {
    variant?: "underline" | "card"
  }

function TabsTrigger({
  className,
  variant = "underline",
  ...props
}: TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        `
        group relative
        text-sm font-medium
        transition-colors duration-300
        focus-visible:outline-none
        mb-2
        `,
        variant === "underline" &&
          `
          px-1 pb-3
          text-muted-foreground
          hover:text-foreground
          data-[state=active]:text-foreground
          `,
        className
      )}
      {...props}
    >
      {props.children}

      {/* ✅ Underline ONLY for underline variant */}
      {variant === "underline" && (
        <span
          className="
            pointer-events-none
            absolute left-0 bottom-0 h-[2px] w-full
            origin-center scale-x-0 bg-current
            transition-transform duration-300 ease-out
            group-data-[state=active]:scale-x-100
          "
        />
      )}
    </TabsPrimitive.Trigger>
  )
}

/* ---------------- Tabs Content ---------------- */

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

/* ---------------- Exports ---------------- */

export { Tabs, TabsList, TabsTrigger, TabsContent }
