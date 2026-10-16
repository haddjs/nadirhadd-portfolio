import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProviderWrapper } from "@/components/theme-provider";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "nadirhadd",
    template: "%s — nadirhadd",
  },
  description:
    "Portfolio of Nadir Septian Hadiansyah — front-end developer building interfaces, design systems, and web applications.",
  icons: {
    icon: "/assets/images/icon.png",
  },
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
