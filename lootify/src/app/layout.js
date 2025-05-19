import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lootify Casino - Premium Gaming Experience',
  description: 'Experience the future of online gaming with Lootify Casino',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-black text-white">
          {children}
        </main>
      </body>
    </html>
  )
}
