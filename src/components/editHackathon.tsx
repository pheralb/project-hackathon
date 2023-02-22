import type { THackathon } from "@/types/hackathon.type";
import { useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

import { SaveFloppyDisk, Settings } from "iconoir-react";
import { Modal, Button, Alert } from "@/ui";
import { inputStyles } from "@/ui/input";
import { updateHackathon } from "@/schema";

const EditHackathon = (props: updateHackathon) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<THackathon>();

  const onSubmit: SubmitHandler<THackathon> = async (data) => {
    try {
      setLoading(true);
      await fetch("/api/routes/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: props.id,
          ...data,
        }),
      });
      router.reload();
    } catch (err) {
      alert(err);
      setLoading(false);
    }
  };

  return (
    <Modal
      btn={<Button icon={<Settings width={18} />}>Settings</Button>}
      title="Settings"
    >
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
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
        <div className="flex flex-row-reverse">
          <Button
            type="submit"
            disabled={loading}
            loadingstatus={loading}
            icon={<SaveFloppyDisk width={17} />}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditHackathon;
