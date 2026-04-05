import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avi Weds Manisha | 21st April 2026",
  description: "Join us for the wedding celebration of Avishkant & Manisha Patidar on 21st April 2026 at Village Ledgaon, District Dhar, Madhya Pradesh.",
  openGraph: {
    title: "Avi Weds Manisha 💍",
    description: "You're invited! Avishkant & Manisha's Wedding — 21st April 2026",
    url: "https://aviwedsmanisha.app",
    siteName: "Avi Weds Manisha",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Great+Vibes&family=Jost:wght@200;300;400;500;600&family=Tiro+Devanagari+Hindi:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💍</text></svg>" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
