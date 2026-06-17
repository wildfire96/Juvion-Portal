import type { Metadata } from "next";
import { Manrope, Merriweather } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juvion.top"),
  title: {
    default: "Juvion | Accelerate your Online Career",
    template: "%s | Juvion"
  },
  description: "Find the ideal college, access study guides, and compare options with independent reviews.",
  openGraph: {
    title: "Juvion | Accelerate your Online Career",
    description: "Find the ideal college, access study guides, and compare options with independent reviews.",
    url: "https://juvion.top",
    siteName: "Juvion",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Juvion - Accelerate your online career",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juvion | Accelerate your Online Career",
    description: "Find the ideal college, access study guides, and compare options with independent reviews.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      suppressHydrationWarning
      className={`${manrope.variable} ${merriweather.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
