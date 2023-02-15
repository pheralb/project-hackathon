import { useState } from "react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

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

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <NextNProgress
        color="#979797"
        startPosition={0.3}
        stopDelayMs={200}
        height={1}
        showOnShallow={true}
      />
      <main className={clsx(DmSans.variable, "font-sans")}>
        <Component {...pageProps} />
      </main>
    </SessionContextProvider>
  );
}
