import type { THackathon } from "@/types/hackathon.type";
import { useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import { Plus } from "iconoir-react";
import { Modal, Button, ButtonLg, Alert, Tip } from "@/ui";
import { inputStyles } from "@/ui/input";

const CreateNew = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<THackathon>();

  const onSubmit: SubmitHandler<THackathon> = async (data) => {
    let url = nanoid(10);
    try {
      setLoading(true);
      await fetch("/api/routes/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          url,
        }),
      });
      router.push(`/dash/${url}`);
    } catch (err) {
      alert(err);
      setLoading(false);
    }
  };

  return (
    <Modal
      btn={
        <Button icon={<Plus width={30} />} disabled={loading}>
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
            {loading ? "Creating..." : "Create"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default CreateNew;
