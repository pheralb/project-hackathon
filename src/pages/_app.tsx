import type { AppProps } from "next/app";

// Styles:
import clsx from "clsx";
import "@/styles/globals.css";

// Font:
import { DM_Sans } from "@next/font/google";
const DmSans = DM_Sans({
  weight: ["400", "500", "700"],
  variable: "--dmsans-font",
  preload: true,
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(DmSans.variable, "font-sans")}>
      <Component {...pageProps} />
    </main>
  );
}
