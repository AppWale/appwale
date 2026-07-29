import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingCursor from "@/components/floating-cursor";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://appwale.in"),

  title: {
    default:
      "Website & Mobile App Development Company | Appwale Software Solutions",
    template: "%s | Appwale Software Solutions",
  },

  description:
    "Appwale Software Solutions builds professional websites, mobile applications, and custom software solutions for startups, businesses, professionals, and enterprises.",

  keywords: [
    "website development company",
    "mobile app development company",
    "business website development",
    "custom software solutions",
    "Jabalpur software company",
    "Appwale",
  ],

  applicationName: "Appwale Software Solutions",

  authors: [
    {
      name: "Appwale Software Solutions",
    },
  ],

  creator: "Appwale Software Solutions",
  publisher: "Appwale Software Solutions",

  category: "Technology",

  alternates: {
    canonical: "https://appwale.in",
  },

  robots: {
    index: true,
    follow: true,
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],

    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title:
      "Website & Mobile App Development Company | Appwale Software Solutions",

    description:
      "Professional websites and mobile applications designed to help businesses grow digitally.",

    url: "https://appwale.in",

    siteName: "Appwale Software Solutions",

    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Appwale Software Solutions - Website and Mobile App Development",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Website & Mobile App Development Company | Appwale Software Solutions",

    description:
      "Custom websites and mobile applications for modern businesses.",

    images: ["/image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark" suppressHydrationWarning
    >
      <body className={`${inter.className} bg-black mx-auto max-w-360`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <FloatingCursor />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
