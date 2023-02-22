import type { AppType } from "next/app";
import NextNProgress from "nextjs-progressbar";

// Next-Auth:
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

// tRPC:
import { api } from "@/trpc/api";

// Styles:
import "@/styles/globals.css";

// Layout:
import Header from "@/layout/header";
import Footer from "@/layout/footer";

// SEO:
import { DefaultSeo } from "next-seo";
import { nextSeoConfig } from "next-seo.config";

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <DefaultSeo {...nextSeoConfig} />
      <NextNProgress
        color="#979797"
        startPosition={0.3}
        stopDelayMs={200}
        height={1}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <main className="font-sans">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(App);
