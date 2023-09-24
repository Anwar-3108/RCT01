import { Providers } from '@/redux/providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'my Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        
        <Providers  >

        {children}
        </Providers>
        
        
        </body>
    </html>
  )
}
