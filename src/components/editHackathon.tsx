import { api } from "@/trpc/api";
import { nanoid } from "nanoid";
import type { THackathon } from "@/types/hackathon.type";
import { useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateHackathon } from "@/schema/hackathon";

import { SaveFloppyDisk, Settings } from "@/ui/icons";
import { Modal, Button, Alert } from "@/ui";
import { inputStyles } from "@/ui/input";
import DeleteHackathon from "./deleteHackathon";
import { toast } from "sonner";

interface EditHackathonProps extends updateHackathon {
  key: string;
  url: string;
}

const EditHackathon = (props: EditHackathonProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  const [validateWord, setValidateWord] = useState<boolean>();
  const randomWord = nanoid(6);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<THackathon>();

  const { mutate } = api.hackathon.editHackathon.useMutation({
    onSuccess: () => {
      setLoading(false);
      router.reload();
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
        id: props.id,
        is_finished: false,
      });
      toast.success("Hackathon created successfully");
    } catch (err) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <Modal
      btn={<Button icon={<Settings width={18} />}>Settings</Button>}
      title="Settings"
    >
      <form className="mb-3 space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="name">Title:</label>
          <input
            id="name"
            defaultValue={props.name}
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
            defaultValue={props.description}
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
        <div className="mb-6">
          <label htmlFor="url">Key:</label>
          <input
            id="url"
            defaultValue={props.url}
            className={inputStyles}
            autoComplete="off"
            disabled={true}
          />
        </div>
        <div className="flex flex-row-reverse">
          <Button
            type="submit"
            disabled={loading}
            loadingstatus={loading}
            icon={<SaveFloppyDisk width={17} />}
          >
            {loading ? "Playing Kukoro..." : "Save"}
          </Button>
        </div>
      </form>
      <DeleteHackathon id={props.id} />
    </Modal>
  );
};

export default EditHackathon;
