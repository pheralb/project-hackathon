import { useState } from "react";
import { api } from "@/trpc/api";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

import { toast } from "sonner";
import { inputStyles } from "@/ui/input";
import { Button } from "@/ui";

interface DeleteHackathonProps {
  id: string;
}

const DeleteHackathon = (props: DeleteHackathonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();

  const [randomWord, setRandomWord] = useState<string>(nanoid(6));
  const [validateInput, setValidateInput] = useState<string>("");

  const { mutate: deleteHackathon } = api.hackathon.deleteHackathon.useMutation(
    {
      onSuccess: () => {
        setLoading(false);
        router.push("/app");
        toast.success("Hackathon deleted successfully");
      },
      onError: () => {
        setLoading(false);
      },
    },
  );

  const deleteHackathonHandler = (id: string, word: string) => {
    if (randomWord === word) {
      setLoading(true);
      try {
        deleteHackathon({
          id: id,
        });
      } catch (err) {
        toast.error("Something went wrong");
        setLoading(false);
      }
    } else {
      toast.error("The words do not match");
    }
  };

  return (
    <div className="rounded-md border border-red-700/30 p-3">
      <p className="mb-2 font-bold">😢 Delete hackathon</p>
      <p>
        Deleting a hackathon is irreversible. If you want to delete this
        hackathon, please type{" "}
        <code className="text-red-200">{randomWord}</code> in the box below and
        click the button.
      </p>
      <input
        className={inputStyles}
        onChange={(e) => setValidateInput(e.target.value)}
        autoComplete="off"
        disabled={loading}
      />
      <div className="flex items-center justify-end">
        <Button
          onClick={() => deleteHackathonHandler(props.id, validateInput)}
          loadingstatus={loading}
          disabled={loading}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteHackathon;
