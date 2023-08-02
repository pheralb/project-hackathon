import Head from "next/head";
import { api } from "@/trpc/api";
import { useRouter } from "next/router";

import Loading from "@/components/loading";
import SendProject from "@/components/sendProject";
import { Link } from "@/ui";
import { ButtonStyles } from "@/ui/button";

const Send = () => {
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

  if (error || !data.hackathon) {
    return router.push("/404");
  }

  return (
    <>
      <Head>
        <title>Send project: {data.hackathon.name} - Project Hackathon</title>
      </Head>
      <div className="mx-auto flex h-screen flex-col items-center justify-center">
        {data.participants.length === 0 ? (
          <SendProject
            id={data.hackathon.id}
            url={data.hackathon.url}
            name={data.hackathon.name}
            description={data.hackathon.description}
            is_finished={data.hackathon.is_finished}
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <h1 className="mb-3 text-center text-3xl font-medium">
              You already sent a project for this hackathon
            </h1>
            <p className="mb-3 text-center text-gray-400">
              You can only send one project per hackathon
            </p>
            <Link href="/app" className={ButtonStyles}>
              Go to dashboard
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Send;
