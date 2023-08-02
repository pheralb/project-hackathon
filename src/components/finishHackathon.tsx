import { useState } from "react";
import { api } from "@/trpc/api";
import { useRouter } from "next/router";

import { toast } from "sonner";
import { Button } from "@/ui";

interface FinishHackathonProps {
  is_finished: boolean;
  url: string;
}

const FinishHackathon = (props: FinishHackathonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();

  const { mutate: finishHackathon } = api.hackathon.finishHackathon.useMutation(
    {
      onSuccess: () => {
        setLoading(false);
        router.push("/app");
        toast.success("Hackathon finished 🥳");
      },
      onError: () => {
        setLoading(false);
      },
    },
  );

  const finishHackathonHandler = (id: string) => {
    try {
            finishHackathon({
            url: props.url,
            });
        } catch (err) {
            toast.error("Something went wrong");
            setLoading(false);
        }
    }

  return (
    <div className="rounded-md border border-yellow-700/30 p-3">
      <p className="mb-3 font-bold">🎉 Finish Hackathon</p>
        
        {!props.is_finished ? (
      <div className="flex flex-col space-y-2 items-center justify-end">
        <Button
          onClick={() => finishHackathonHandler(props.url)}
          loadingstatus={loading}
          disabled={loading}
          wFull
        >
          {loading ? "Finishing..." : "Finish Hackathon"}
        </Button>
        <p className="mb-3 text-sm text-gray-400">
            💡 Users can no longer submit projects to this hackathon.
        </p>
      </div>
        ) : (
            <p className="mb-3 text-sm text-gray-400">
                This hackathon is already finished 🥳
            </p>
        )}
    </div>
  );
};

export default FinishHackathon;