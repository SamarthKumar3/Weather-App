import './globals.css';

import { Sofia_Sans  } from 'next/font/google'

const sofiaSans  = Sofia_Sans ({ weight: ["400","600","700","800","900"] ,subsets: ['latin'], variable:'--font-sofia-sans' })

export const metadata = {
  title: 'Weather App',
  description: 'Weather forecast App built using Next.js and uses OpenWeather API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sofiaSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
