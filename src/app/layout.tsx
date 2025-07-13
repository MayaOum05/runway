import './globals.css'
import type { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Runway',
  description: 'See outfit and makeup details, save your favorite looks to your own board!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
