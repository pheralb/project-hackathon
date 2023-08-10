import { api } from "@/trpc/api";
import { useState } from "react";
import type { THackathon } from "@/types/hackathon.type";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import { Plus } from "@/ui/icons";
import { Modal, Button, Alert, Tip } from "@/ui";
import { inputStyles } from "@/ui/input";
import { toast } from "sonner";
import confetti from "canvas-confetti";

const CreateNew = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  let url = nanoid(6);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<THackathon>();

  const { mutate } = api.hackathon.createHackathon.useMutation({
    onSuccess: () => {
      router.push(`/app/${url}`);
      setLoading(false);
      confetti({
        spread: 100,
      });
    },
    onError: () => {
      setLoading(false);
    },
  });

  const onSubmit: SubmitHandler<THackathon> = (data) => {
    try {
      setLoading(true);
      mutate({
        ...data,
        url,
        is_finished: false,
      });
      toast.success("Hackathon created successfully");
    } catch (err) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <Modal
      btn={
        <Button icon={<Plus width={18} />} disabled={loading}>
          Create hackathon
        </Button>
      }
      title="Create new hackathon"
      description="Create a new hackathon"
    >
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="name">Title:</label>
          <input
            id="name"
            className={inputStyles}
            placeholder="Hackathon name (max 25 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("name", {
              required: "Hackathon name is required",
              maxLength: {
                value: 25,
                message: "Hackathon name must be less than 25 characters",
              },
            })}
          />
          {errors.name && <Alert>{errors.name?.message}</Alert>}
        </div>
        <div className="mb-6">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            className={inputStyles}
            placeholder="Description (max 200 characters)"
            autoComplete="off"
            disabled={loading}
            {...register("description", {
              maxLength: {
                value: 200,
                message: "Description must be less than 200 characters",
              },
            })}
          />
          {errors.description && <Alert>{errors.description?.message}</Alert>}
        </div>
        <Tip>You can edit all later in the hackathon settings.</Tip>
        <div className="flex flex-row-reverse">
          <Button type="submit" disabled={loading} loadingstatus={loading}>
            {loading ? "Playing Kukoro..." : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateNew;
