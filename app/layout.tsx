import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { StoreProvider } from "./store-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MyApp - Multi-Tenant Application",
  description: "A multi-tenant application built with Next.js",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <StoreProvider>{children}</StoreProvider>
        </AntdRegistry>
      </body>
    </html>
  )
}
