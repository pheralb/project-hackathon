import { GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import { Tip } from "@/ui";
import CreateNew from "@/components/createNew";
import EnterKey from "@/components/enterKey";
import { THackathon } from "@/types/hackathon.type";
import HackathonCard from "@/components/hackathonCard";

const Dashboard = ({ hackathons }: { hackathons: THackathon[] }) => {
  console.log(hackathons);
  return (
    <>
      <div className="mt-16 flex w-full items-center justify-between border-y border-neutral-800 py-4 px-6">
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <EnterKey />
          <CreateNew />
        </div>
      </div>
      {hackathons.length > 0 ? (
        <div className="container mx-auto mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hackathons.map((hackathon) => (
              <HackathonCard key={hackathon.id} {...hackathon} />
            ))}
          </div>
        </div>
      ) : (
        <Tip>
          <p className="text-center">
            You don&apos;t have any hackathons yet. Create one by clicking the
            button above.
          </p>
        </Tip>
      )}
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(ctx);

  // Cache data
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
  );

  // Fetch hackathon data from authenticated user:
  const hackathons = await prisma.hackathon.findMany({
    select: {
      id: true,
      name: true,
      url: true,
      description: true,
    },
    where: {
      creatorId: session?.user?.id,
    },
  });

  return {
    props: {
      hackathons,
    },
  };
};

export default Dashboard;
