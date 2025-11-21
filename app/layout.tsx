import "@/styles/globals.css";
import "@/styles/main.css";
import "@/styles/custom.css";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";


import { siteConfig } from "@/config/site";

// Fonts
import { Poppins, JetBrains_Mono } from "next/font/google";
import FooterNew from './components/Footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="light">
      <head />
      <body
        className={
          "min-h-screen bg-white text-black antialiased " +
          poppins.variable +
          " " +
          jetbrainsMono.variable
        }
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <main className="light">
              {children}
            </main>
            <FooterNew />
          </div>
        </Providers>
      </body>
    </html>
  );
}
