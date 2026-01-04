"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

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

function TabsList({
    className,
    ...props
  }: React.ComponentProps<typeof TabsPrimitive.List>) {
    return (
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn(
          `
          relative inline-flex w-fit items-center gap-8
          border-b border-border
          `,
          className
        )}
        {...props}
      />
    )
  }
  

  function TabsTrigger({
    className,
    ...props
  }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
    return (
      <TabsPrimitive.Trigger
        data-slot="tabs-trigger"
        className={cn(
          `
          group relative px-1 pb-3
          text-sm font-medium
          text-muted-foreground
          transition-colors duration-300
  
          hover:text-foreground
          focus-visible:outline-none
  
          data-[state=active]:text-foreground
          `,
          className
        )}
        {...props}
      >
        {props.children}
  
        {/* Underline */}
        <span
          className="
            pointer-events-none
            absolute left-0 bottom-0 h-[2px] w-full
            origin-center scale-x-0 bg-current
            transition-transform duration-300 ease-out
            group-data-[state=active]:scale-x-100
          "
        />
      </TabsPrimitive.Trigger>
    )
  }
  
  

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

export { Tabs, TabsList, TabsTrigger, TabsContent }
