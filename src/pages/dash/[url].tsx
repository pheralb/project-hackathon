import Head from "next/head";
import { useRouter } from "next/router";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

import { Button, Link } from "@/ui";
import { ArrowLeft, KeyAltPlus } from "iconoir-react";
import EditHackathon from "@/components/editHackathon";
import { THackathon } from "@/types/hackathon.type";
import Loading from "@/components/loading";
import { GetServerSideProps } from "next";
import { getServerAuthSession } from "@/lib/auth";

const DashUrl = () => {
  const router = useRouter();
  const { url } = router.query;
  const { data, isLoading } = useSWR(
    `/api/routes/getSingle?url=${url}`,
    fetcher,
  );

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <Loading />
        </div>
      ) : (
        data && (
          <div key={data.hackathon.id}>
            <Head>
              <title>{data.hackathon.name} - Project Hackathon</title>
            </Head>
            <div className="mt-16 flex w-full items-center justify-between border-y border-neutral-800 py-4 px-6">
              <div className="flex items-center space-x-4">
                <Link href="/dash">
                  <ArrowLeft
                    width={20}
                    className="cursor-pointer transition-all hover:-translate-x-0.5"
                  />
                </Link>
                <h1 className="text-2xl font-medium">{data.hackathon.name}</h1>
              </div>
              <div className="flex items-center space-x-3">
                <Button icon={<KeyAltPlus width={18} />}>Copy key</Button>
                <EditHackathon {...data.hackathon} />
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center space-y-2">
              <h1 className="text-2xl">🎉 Your hackathon is ready!</h1>
              <div className="flex flex-col space-y-2">
                <p className="text-gray-400">
                  Share the following link with your team members to get
                  started.
                </p>
              </div>
            </div>
          </div>
        )
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

export default DashUrl;
