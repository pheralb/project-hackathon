import Head from "next/head";
import { api } from "@/trpc/api";
import type { Hackathon } from "@prisma/client";
import { useState } from "react";

import CreateNew from "@/components/createNew";
import EnterKey from "@/components/enterKey";
import HackathonCard from "@/components/hackathonCard";
import Loading from "@/components/loading";
import { Input, Tip } from "@/ui";
import { ArrowDown } from "@/ui/icons";
import Up from "@/animations/up";
import Down from "@/animations/down";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const {
    data: hackathons,
    isLoading,
    error,
  } = api.hackathon.allHackathons.useQuery();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Dashboard - Project Hackathon</title>
      </Head>
      <div className="mt-16 flex w-full flex-wrap items-center justify-between gap-2 border-b border-neutral-800 py-4 px-6 sm:flex-nowrap sm:gap-0">
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <EnterKey />
          <CreateNew />
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-6xl px-6 md:px-0">
        {isLoading ? (
          <div className="mt-6">
            <Loading />
          </div>
        ) : hackathons && hackathons?.length > 0 ? (
          <>
            <Input
              value={search}
              placeholder="Search..."
              onChange={handleSearch}
            />
            <div className="container mx-auto mt-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {hackathons.map(
                  (hackathon: Hackathon) =>
                    hackathon.name.includes(search) && (
                      <HackathonCard
                        key={hackathon.id}
                        name={hackathon.name}
                        description={hackathon.description || ""}
                        url={hackathon.url}
                      />
                    ),
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Up>
              <h1 className="mb-2 text-2xl font-medium">Welcome</h1>
            </Up>
            <Down delay={0.2}>
              <div className="flex flex-col items-center justify-center">
                <p className="mb-2 text-center text-neutral-300">
                  You don't have any hackathons yet. Create one now!
                </p>
                <ArrowDown width={32} className="mb-2" />
                <CreateNew />
              </div>
            </Down>
          </div>
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

export default Dashboard;
