import Head from "next/head";
import { getServerAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import type { THackathon } from "@/types/hackathon.type";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

import { Button, Link } from "@/ui";
import { ArrowLeft, KeyAltPlus } from "iconoir-react";

import EditHackathon from "@/components/editHackathon";

const DashUrl = ({ hackathonData }: { hackathonData: THackathon[] }) => {
  return (
    hackathonData &&
    hackathonData.map((hackathon) => (
      <div key={hackathon.id}>
        <Head>
          <title>{hackathon.name} - Project Hackathon</title>
        </Head>
        <div className="mt-16 flex w-full items-center justify-between border-y border-neutral-800 py-4 px-6">
          <div className="flex items-center space-x-4">
            <Link href="/dash">
              <ArrowLeft
                width={20}
                className="cursor-pointer transition-all hover:-translate-x-0.5"
              />
            </Link>
            <h1 className="text-2xl font-medium">{hackathon.name}</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Button icon={<KeyAltPlus width={18} />}>Copy key</Button>
            <EditHackathon {...hackathon} />
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
    ))
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
) => {
  const { url } = ctx.query;
  const session = await getServerAuthSession(ctx);

  // Check authentication:
  if (!session?.user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  // Cache data
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );

  // Fetch hackathon data from authenticated user:
  const hackathonData = await prisma.hackathon.findMany({
    where: {
      url: url as string,
      creatorId: session?.user?.id,
    },
  });

  // Redirect to 404 if no data
  if (hackathonData.length === 0 || !session) {
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
      hackathonData: JSON.parse(JSON.stringify(hackathonData)),
    },
  };
};

export default DashUrl;
