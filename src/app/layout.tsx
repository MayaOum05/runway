import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Screen from '@/app/components/Screen'

export const metadata: Metadata = {
  title: 'Runway ✈️ - Beauty & Fashion App',
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
        <Screen>
          <Navbar />
          {children}
        </Screen>
      </body>
    </html>
  )
}
