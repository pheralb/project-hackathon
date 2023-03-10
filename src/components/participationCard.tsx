import { participation } from "@/schema/participation";
import { api } from "@/trpc/api";
import { Button } from "@/ui";

import Check from "@/ui/icons/check";
import confetti from "canvas-confetti";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "sonner";
import ViewProject from "./viewProject";

const ParticipationCard = (props: participation) => {
  const [winner, setWinner] = useState<boolean>();
  const [reviewed, setReviewed] = useState<boolean>();
  const router = useRouter();

  const { mutate } = api.participation.updateParticipation.useMutation({
    onError: () => {
      setWinner(false);
      setReviewed(false);
    },
  });

  const handleWinner = () => {
    setWinner(true);
    setReviewed(true);
    mutate({
      id: props.id,
      is_winner: true,
      is_reviewed: true,
    });
    confetti({
      spread: 100,
    });
    toast.success(`Winner set for ${props.title} 🎉`);
  };

  const handleReviewed = () => {
    setReviewed(true);
    mutate({
      id: props.id,
      is_winner: false,
      is_reviewed: true,
    });
    toast.success(`Reviewed set for ${props.title} 🔎`);
  };

  return (
    <div className="rounded-lg bg-neutral-800/40 shadow">
      <div className="w-full p-5">
        <h3 className="text-md font-bold tracking-tight text-gray-900 dark:text-white md:text-xl">
          {props.title}
        </h3>
        <span className="font-mono font-bold text-gray-500">
          {props.creatorName}
        </span>
        <p className="mt-3 mb-6 truncate font-light text-gray-500 dark:text-gray-400">
          {props.description}
        </p>
        <div className="flex w-full items-center justify-end space-x-2 overflow-x-auto">
          <Button
            icon={<Check width={15} />}
            onClick={handleWinner}
            disabled={props.is_winner || winner}
          >
            {props.is_winner || winner ? "Winner" : "Winner"}
          </Button>
          <Button
            icon={<Check width={15} />}
            onClick={handleReviewed}
            disabled={props.is_reviewed || reviewed}
          >
            {props.is_reviewed || reviewed ? "Reviewed" : "Review"}
          </Button>
          <ViewProject
            title={props.title}
            description={props.description}
            project_url={props.project_url}
          />
        </div>
      </div>
    </div>
  );
};

export default ParticipationCard;
