import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import type { THackathon } from "@/types/hackathon.type";

import { Tip } from "@/ui";
import CreateNew from "@/components/createNew";
import EnterKey from "@/components/enterKey";
import HackathonCard from "@/components/hackathonCard";
import Loading from "@/components/loading";
import { GetServerSideProps } from "next";
import { getServerAuthSession } from "@/lib/auth";

const Dashboard = () => {
  const { data, isLoading } = useSWR("/api/routes/getAll", fetcher);
  return (
    <>
      <div className="mt-16 flex w-full items-center justify-between border-y border-neutral-800 py-4 px-6">
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <EnterKey />
          <CreateNew />
        </div>
      </div>
      {isLoading ? (
        <div className="mt-6">
          <Loading />
        </div>
      ) : data?.length > 0 ? (
        <div className="container mx-auto mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.map((hackathon: THackathon) => (
              <HackathonCard key={hackathon.id} {...hackathon} />
            ))}
          </div>
        </div>
      ) : (
        <Tip>
          You don&apos;t have any hackathons yet. Create one by clicking the
          button above.
        </Tip>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Dashboard;
