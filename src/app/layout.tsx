import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MEGA AI Case Studies",
  description: "Real results from MEGA's AI-powered marketing strategies",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MEGA AI Case Studies",
    description: "Real results from MEGA's AI-powered marketing strategies",
    images: [{ url: "/og-image.png", width: 256, height: 256 }],
    type: "website",
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
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
