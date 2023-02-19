import Head from "next/head";
import { getServerAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import type { THackathon } from "@/types/hackathon.type";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

import { Link } from "@/ui";
import { ArrowLeft } from "iconoir-react";

const DashUrl = ({ hackathonData }: { hackathonData: THackathon }) => {
  return (
    <div>
      <Head>
        <title>{hackathonData.name} - Project Hackathon</title>
      </Head>
      <div className="mt-16 flex w-full items-center justify-between border-y border-neutral-800 py-4 px-6">
        <div className="flex items-center space-x-4">
          <Link href="/dash">
            <ArrowLeft
              width={20}
              className="cursor-pointer transition-all hover:-translate-x-0.5"
            />
          </Link>
          <h1 className="text-2xl font-medium">{hackathonData.name}</h1>
        </div>
        <div className="flex items-center space-x-3">
          {/* <Button icon={<KeyAltPlus width={18} />}>Copy key</Button>
          <Button icon={<Settings width={18} />}>Settings</Button> */}
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
  const session = await getServerAuthSession(ctx);

  // Cache data
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );

  // Fetch hackathon data from authenticated user:
  const hackathonData = await prisma.hackathon.findMany({
    where: {
      url: url as string,
      owner: session?.user?.id,
    },
  });

  // Redirect to 404 if no data
  if (!hackathonData) {
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
      hackathonData,
    },
  };
};

export default DashUrl;
