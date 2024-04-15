'use client'

import { NextUIProvider } from "@nextui-org/react"

export const AppProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
