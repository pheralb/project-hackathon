import { useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "@/lib/auth";
import { api } from "@/trpc/api";

import { Input, Tip } from "@/ui";
import CreateNew from "@/components/createNew";
import EnterKey from "@/components/enterKey";
import HackathonCard from "@/components/hackathonCard";
import Loading from "@/components/loading";
import { Hackathon } from "@prisma/client";

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const {
    data: hackathons,
    isLoading,
    error,
  } = api.hackathon.allHackathons.useQuery({
    filter,
  });

  return (
    <>
      <div className="mt-16 flex w-full items-center justify-between border-y border-neutral-800 py-4 px-6">
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <EnterKey />
          <CreateNew />
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-6xl">
        <Input value={filter} onChange={(e) => setFilter(e.target.value)} />
        {isLoading ? (
          <div className="mt-6">
            <Loading />
          </div>
        ) : hackathons && hackathons?.length > 0 ? (
          <div className="container mx-auto mt-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {hackathons.map((hackathon: Hackathon) => (
                <HackathonCard
                  key={hackathon.id}
                  name={hackathon.name}
                  description={hackathon.description || "No description"}
                  url={hackathon.url}
                />
              ))}
            </div>
          </div>
        ) : (
          <Tip>
            You don&apos;t have any hackathons yet. Create one by clicking the
            button above.
          </Tip>
        )}
        {error && (
          <Tip>
            <p className="text-red-500">
              Error: {error.data?.code} - {error.message}
            </p>
          </Tip>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext,
) => {
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
