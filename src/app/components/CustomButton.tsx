'use client'

import { Button, extendVariants } from "@nextui-org/react";

export const CustomButton = extendVariants(Button, {
  variants: {
    color: {
      green: "bg-[#008039] text-[#fff]"
    },
    size: {
      xs: "px-2 min-w-12 h-6 text-tiny gap-1 rounded-small"
    }
  },
  defaultVariants: {
    color: "green",
    size: "xs"
  }
})
