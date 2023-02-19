import Head from "next/head";
import type { THackathon } from "@/types/hackathon.type";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

import { Button, Link } from "@/ui";
import { ArrowLeft, KeyAltPlus, Settings } from "iconoir-react";

const DashUrl = ({ data }: { data: THackathon }) => {
  return (
    <div>
      <Head>
        <title>{data.name} - Project Hackathon</title>
      </Head>
      <div className="mt-16 flex w-full items-center justify-between border-y border-neutral-800 py-4 px-6">
        <div className="flex items-center space-x-4">
          <Link href="/dash">
            <ArrowLeft
              width={20}
              className="cursor-pointer transition-all hover:-translate-x-0.5"
            />
          </Link>
          <h1 className="text-2xl font-medium">{data.name}</h1>
        </div>
        <div className="flex items-center space-x-3">
          <Button icon={<KeyAltPlus width={18} />}>Copy key</Button>
          <Button icon={<Settings width={18} />}>Settings</Button>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center space-y-2">
        <h1 className="text-2xl">🎉 Your hackathon is ready!</h1>
        <div className="flex flex-col space-y-2">
          <p className="text-gray-400">
            Share the following link with your team members to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  const { url } = ctx.query;

  // Cache data
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );

  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Fetch single row from table
  const { data } = await supabase
    .from("hackathon")
    .select("*")
    .eq("url", url)
    .single();

  // Redirect to 404 if no data
  if (!data || !session) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: {
      url,
      initialSession: session,
      data,
    },
  };
};

export default DashUrl;
