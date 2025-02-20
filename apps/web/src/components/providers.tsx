"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { NuqsAdapter } from 'nuqs/adapters/next/app'
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      enableColorScheme
    >
      <NuqsAdapter>
          {children}
      </NuqsAdapter>
    </NextThemesProvider>
  )
}
