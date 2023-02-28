import { Send } from "@/ui/icons";
import { Modal, Button, Alert } from "@/ui";
import { useRouter } from "next/router";
import { useState } from "react";
import { nanoid } from "nanoid";

import { newParticipation } from "@/schema/participation";
import { SubmitHandler, useForm } from "react-hook-form";
import { api } from "@/trpc/api";
import { inputStyles } from "@/ui/input";
import { toast } from "sonner";

const EnterKey = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>();
  let randomWord = nanoid(4);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newParticipation>();

  const onSubmit: SubmitHandler<newParticipation> = async (data) => {
    try {
      setLoading(true);

      const res = await api.hackathon.checkHackathonUrl.useQuery({
        ...data,
        url: randomWord,
      });

      if (res) {
        router.push(`/app/${randomWord}`);
      } else {
        toast.error("Invalid URL");
      }
    } catch (err) {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <Modal
      btn={<Button icon={<Send width={18} />}>Send project</Button>}
      title="Send project"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="name">URL Key:</label>
          <input
            id="key"
            className={inputStyles}
            placeholder="xxxxxx"
            autoComplete="off"
            disabled={loading}
            {...register("title", {
              required: "URL Key is required",
              maxLength: {
                value: 6,
                message: "URL must be less than 6 characters",
              },
            })}
          />
          {errors.project_url && <Alert>{errors.project_url?.message}</Alert>}
        </div>
        <div className="flex flex-row-reverse">
          <Button type="submit" disabled={loading} loadingstatus={loading}>
            {loading ? "Preparing..." : "Continue"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EnterKey;
