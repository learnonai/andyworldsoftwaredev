import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andyworld Software Development - AI & Software Solutions',
  description: 'Leading AI agents and software development company in Pune with 5+ years experience. Specializing in AI solutions, web development, mobile apps, and cutting-edge technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}