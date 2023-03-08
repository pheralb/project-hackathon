import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "@/trpc/api";
import type { TParticipation } from "@/types/participation.type";

import { inputStyles } from "@/ui/input";
import { Button } from "@/ui";
import confetti from "canvas-confetti";

interface iSendProject {
  id: string;
  url: string;
  name: string;
}

const SendProject = (hackathonProps: iSendProject) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TParticipation>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { mutate } = api.participation.createParticipation.useMutation({
    onSuccess: () => {
      router.push(`/app`);
      setLoading(false);
      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 100,
      });
    },
    onError: () => {
      setLoading(false);
    },
  });

  const onSubmit: SubmitHandler<TParticipation> = (data) => {
    try {
      setLoading(true);
      mutate({
        title: data.title,
        description: data.description,
        project_url: data.project_url,
        hackathon_url: hackathonProps.url,
      });
      toast.success("Your project has been successfully submitted");
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      className="flex flex-col space-y-4 rounded-md border border-neutral-800 p-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="border-b border-neutral-800 pb-3">
        <h1 className="text-2xl font-medium">{hackathonProps.name}</h1>
      </div>
      <div className="mt-4">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className={inputStyles}
          {...register("title", { required: true })}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="description">Description:</label>
        <textarea
          className={inputStyles}
          {...register("description", { required: true })}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="project_url">Url:</label>
        <textarea
          className={inputStyles}
          {...register("project_url", { required: true })}
        />
      </div>
      <Button type="submit" loadingstatus={loading}>
        Submit
      </Button>
    </form>
  );
};

export default SendProject;
