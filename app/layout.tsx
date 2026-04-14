import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import PizzaCursor from "./PizzaCursor"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://retro-restaurant-landing-page.vercel.app"),
  title: {
    default: "VIBE*BITE – Retro Burgare & Pizza | Allt är Fresh",
    template: "%s | VIBE*BITE",
  },
  description:
    "VIBE*BITE serverar smashburgare, neapolitansk pizza och craft cocktails med 70-talsestetik. Lokalt inköpt, skyhögt gott – öppet till 02:00 på helger.",
  icons: {
    icon: "/vite*bite.ico",
  },
  openGraph: {
    title: "VIBE*BITE – Retro Burgare & Pizza",
    description:
      "Smashburgare, neapolitansk pizza och craft cocktails med 70-talsestetik. Lokalt inköpt, skyhögt gott – öppet till 02:00 på helger.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "VIBE*BITE – Retro Burgare & Pizza",
      },
    ],
    locale: "sv_SE",
    type: "website",
    siteName: "VIBE*BITE",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIBE*BITE – Retro Burgare & Pizza",
    description: "Smashburgare, pizza och craft cocktails med 70-talsestetik. Allt är fresh.",
    images: ["/og-image.jpeg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Playfair+Display:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
        <PizzaCursor />
        <Analytics />
      </body>
    </html>
  )
}
