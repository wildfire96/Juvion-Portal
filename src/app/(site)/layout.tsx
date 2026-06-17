import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Merriweather } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
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
  title: "Juvion | Portal de Carreiras e Faculdades",
  description: "Encontre a faculdade ideal, acesse guias de estudos e compare opções com análise independente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${merriweather.variable} antialiased scroll-smooth`}
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
