import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import { sanitizeDescription } from "../../lib/sanitizeDescription";
// Define local fonts
const geistMonoVF = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-monovf',
  display: 'swap',
});

const geistVF = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-vf',
  display: 'swap',
});

const siteTitle = process.env.NEXT_PUBLIC_PROJECTNAME;
const siteDescription = 'Check Certified Pre-owned, New, and Used cars on YallaMotor.';
const safeDescription = sanitizeDescription(siteDescription);

export const metadata: Metadata = {
  title: siteTitle,
  description: safeDescription,
  keywords: ['used cars', 'nextjs', 'tailwind', 'typescript'],
  openGraph: {
    title: siteTitle,
    description: safeDescription,
    url: 'https://myapp.com',
    type: 'website',
    images: ['/images/og-logo.jpg'], 
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: safeDescription,
    images: ['/images/og-logo.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://used-cars.com',
  },
   icons: {
    icon: "/images/og-logo.webp",
   },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteTitle,
              url: 'https://used-car.com',
            }),
          }}
        />
      </head>
      <body
        className={`${geistMonoVF.variable} ${geistVF.variable} antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
