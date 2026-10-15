import "./globals.css";
import { ThemeProviderWrapper } from "@/components/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";
import { Space_Grotesk, DM_Sans } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Nadir Hadd — Front-end Developer & Creative Technologist",
  description:
    "Portfolio of Nadir Septian Hadiansyah — front-end developer building interfaces, design systems, and web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="lenis">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <ThemeProviderWrapper
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
