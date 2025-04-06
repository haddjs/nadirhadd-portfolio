import "./globals.css";
import { ThemeProviderWrapper } from "@/components/theme-provider";
import { Poppins, Montserrat } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Made with Love by Nadir",
  description: "nadirhadd's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <div className="transition-color duration-300">
          <ThemeProviderWrapper
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </ThemeProviderWrapper>
        </div>
      </body>
    </html>
  );
}
