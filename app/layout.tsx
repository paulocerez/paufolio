import type { Metadata } from "next";
import { Crimson_Text, Source_Serif_4, Nothing_You_Could_Do } from "next/font/google";
import "./globals.css";

const crimson = Crimson_Text({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap"
});

const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap"
});

const nothingYouCouldDo = Nothing_You_Could_Do({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nothing-you-could-do",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Paulo Ramirez",
  description: "Personal Website of Paulo Ramirez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${crimson.variable} ${sourceSerif.variable} ${nothingYouCouldDo.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-crimson">
          {children}
      </body>
    </html>
  );
}
