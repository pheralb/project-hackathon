import { useState } from "react";
import { api } from "@/trpc/api";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import type { TParticipation } from "@/types/participation.type";

import Loading from "@/components/loading";
import { inputStyles } from "@/ui/input";
import SendProject from "@/components/sendProject";

const Send = () => {
  const router = useRouter();
  const { url } = router.query;

  const {
    data: hackathon,
    isLoading,
    error,
  } = api.hackathon.singleHackathon.useQuery({
    url: url as string,
  });

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error || !hackathon) {
    return router.push("/404");
  }

  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      <SendProject
        id={hackathon.id}
        url={hackathon.url}
        name={hackathon.name}
      />
    </div>
  );
};

export default Send;
