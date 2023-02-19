import type { THackathon } from "@/types/hackathon.type";
import { useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import { Plus } from "iconoir-react";
import { Modal, Button, ButtonLg, Alert } from "@/ui";

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
      // await prisma.hackathon.create({
      //   data: {
      //     name: data.name,
      //     url: url,
      //     description: data.description,
      //   },
      // });
      router.push(`/dash/${url}`);
    } catch (err) {
      alert(err);
      setLoading(false);
    }
  };

  return (
    <Modal
      btn={
        <ButtonLg icon={<Plus width={30} />} disabled={loading}>
          Create hackathon
        </ButtonLg>
      }
      title="Create new hackathon"
      description="Create a new hackathon"
    >
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="name"
          className="focus:ring-primary-500 block w-full rounded-lg border border-neutral-800 bg-midnight py-2 px-3 text-white placeholder-neutral-400 focus:border-transparent focus:outline-none focus:ring-2"
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
