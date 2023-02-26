import { api } from "@/trpc/api";
import Head from "next/head";
import { useRouter } from "next/router";

import { Button, Link } from "@/ui";
import { ArrowLeft, KeyAltPlus } from "@/ui/icons";
import EditHackathon from "@/components/editHackathon";
import Loading from "@/components/loading";
import Prepare from "@/components/prepare";

const DashUrl = () => {
  const router = useRouter();
  const { url } = router.query;

  const { data, isLoading, error } = api.hackathon.singleHackathon.useQuery({
    url: url as string,
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error || !data) {
    return router.push("/404");
  }

  return (
    <>
      <Head>
        <title>{data.hackathon?.name} - Project Hackathon</title>
      </Head>
      <div className="mt-16 flex w-full items-center justify-between border-b border-neutral-800 py-4 px-6">
        <div className="flex items-center space-x-4">
          <Link href="/app">
            <ArrowLeft
              width={24}
              className="cursor-pointer transition-all hover:-translate-x-0.5"
            />
          </Link>
          <h1 className="text-2xl font-medium">{data.hackathon?.name}</h1>
        </div>
        <div className="flex items-center space-x-3">
          <Button icon={<KeyAltPlus width={18} />}>Copy key</Button>
          <EditHackathon
            id={data.hackathon?.id || ""}
            key={data.hackathon?.url || ""}
            name={data.hackathon?.name || ""}
            description={data.hackathon?.description || ""}
            is_finished={false}
          />
        </div>
      </div>
      {data.participants && data.participants?.length > 0 ? (
        <div className="mt-8 flex flex-col items-center justify-center space-y-3">
          {data.participants.map((participant) => (
            <div key={participant.id}>
              <p>{participant.creatorId}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 flex flex-col items-center justify-center space-y-3">
          <Prepare url={data.hackathon?.url || ""} />
        </div>
      )}
    </>
  );
};

export default DashUrl;
