import { useState } from "react";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";

// Styles:
import clsx from "clsx";
import "@/styles/globals.css";

// Layout:
import Footer from "@/layout/footer";

// SEO:
import { DefaultSeo } from "next-seo";
import { nextSeoConfig } from "next-seo.config";

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
      <DefaultSeo {...nextSeoConfig} />
      <NextNProgress
        color="#979797"
        startPosition={0.3}
        stopDelayMs={200}
        height={1}
        showOnShallow={true}
      />
      <main className="font-sans">
        <Component {...pageProps} />
        <Footer />
      </main>
    </SessionContextProvider>
  );
}
