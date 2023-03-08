import { api } from "@/trpc/api";
import Head from "next/head";
import { useRouter } from "next/router";

import { Button, Link } from "@/ui";
import { ArrowLeft, KeyAltPlus } from "@/ui/icons";
import EditHackathon from "@/components/editHackathon";
import Loading from "@/components/loading";
import Prepare from "@/components/prepare";
import ParticipationCard from "@/components/participationCard";
import CopyKey from "@/components/copyKey";

const DashUrl = () => {
  const router = useRouter();
  const { url } = router.query;

  const { data, isLoading, error } =
    api.hackathon.singleHackathonWithParticipants.useQuery({
      url: url as string,
    });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error || !data || !data.hackathon) {
    return router.push("/404");
  }

  return (
    <>
      <Head>
        <title>{data.hackathon?.name} - Project Hackathon</title>
      </Head>
      <div className="mt-16 flex w-full flex-col justify-between space-y-3 border-b border-neutral-800 py-4 px-6 md:flex-row md:items-center md:space-y-0">
        <div className="flex items-center space-x-4">
          <Link href="/app">
            <ArrowLeft
              width={24}
              className="cursor-pointer transition-all hover:-translate-x-0.5"
            />
          </Link>
          <h1 className="text-xl font-medium md:text-2xl">
            {data.hackathon?.name}
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <CopyKey url={data.hackathon.url} />
          <EditHackathon
            id={data.hackathon?.id || ""}
            key={data.hackathon?.url || ""}
            name={data.hackathon?.name || ""}
            description={data.hackathon?.description || ""}
            url={data.hackathon?.url || ""}
            is_finished={false}
          />
        </div>
      </div>
      {data.participants && data.participants?.length > 0 ? (
        <div className="container mx-auto mt-8 px-6">
          <p className="mb-3">{data.participants.length} participants</p>
          <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mb-16">
            {data.participants.map((participant) => (
              <ParticipationCard key={participant.id} {...participant} />
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 mb-16 flex flex-col items-center justify-center space-y-3 px-6">
          <Prepare url={data.hackathon?.url || ""} />
        </div>
      )}
    </>
  );
};

export default DashUrl;
