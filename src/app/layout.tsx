
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";
import { Toaster } from "@/components/ui/toaster"
import AuthProvider from "@/app/Providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Food Order App',
  description: 'Web App Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* eslint-disable-next-line react/no-children-prop */}
      <AuthProvider children={children} />
      <Toaster /></body>

    </html>
  )
}
