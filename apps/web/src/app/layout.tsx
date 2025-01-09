import { Geist, Geist_Mono } from "next/font/google"

import "@usepulse/ui/globals.css"
import { Toaster } from "@usepulse/ui/components/toaster"
import { Providers } from "@/components/providers"


const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased bg-weave`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
