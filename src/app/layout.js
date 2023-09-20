import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flixify Movie App - Powered by FreeProjects1',
  description: 'Generated by create next appDownload Latest Bollywood, Hollywood, Dual Audio Hindi Dubbed, 300MB Movies Movies || Google Drive Direct Download Links || Flixify, flixify, 720p BluRay Movies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#14141f"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
