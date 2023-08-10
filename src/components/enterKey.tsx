import { Send } from "@/ui/icons";
import { Modal, Button } from "@/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { inputStyles } from "@/ui/input";

const EnterKey = () => {
  const router = useRouter();
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);

  const goSendProject = (key: string) => {
    setLoading(true);
    router.push(`https://phck.vercel.app/send/${key}`);
  };

  return (
    <Modal
      btn={<Button icon={<Send width={18} />}>Send project</Button>}
      title="Send project"
    >
      <form onSubmit={() => goSendProject(key)}>
        <div className="mb-2">
          <label htmlFor="key">phck.vercel.app/send/</label>
          <input
            id="key"
            className={inputStyles}
            placeholder="xxxxxx"
            autoComplete="off"
            onChange={(e) => setKey(e.target.value)}
          />
        </div>
        <div className="mt-4 flex flex-row-reverse">
          <Button
            onClick={() => goSendProject(key)}
            disabled={loading}
            loadingstatus={loading}
          >
            {loading ? "Preparing..." : "Continue"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EnterKey;
