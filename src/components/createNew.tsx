import type { THackathon } from "@/types/hackathon.type";
import { useState } from "react";
import { newHackathonSchema } from "@/schema";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Plus } from "iconoir-react";
import { Modal, Button, ButtonLg } from "@/ui";

const CreateNew = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<THackathon>({
    resolver: zodResolver(newHackathonSchema),
  });

  const onSubmit: SubmitHandler<THackathon> = (data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      btn={
        <ButtonLg icon={<Plus width={30} />} isLoading={loading}>
          Create hackathon
        </ButtonLg>
      }
      title="Create new hackathon"
      action={() => alert("Create")}
      actionText="Create"
      description="Create a new hackathon"
    >
      <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="name"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
          placeholder="Your name"
          {...register("name")}
        />
        <Button type="submit" isLoading={isSubmitting}>
          Create new hackathon
        </Button>
      </form>
    </Modal>
  );
};

export default CreateNew;
