import { Send } from "iconoir-react";
import { Modal, Button } from "@/ui";

const EnterKey = () => {
  return (
    <Modal
      btn={<Button icon={<Send width={30} />}>Send project</Button>}
      title="Enter hackathon key"
      action={() => alert("Create")}
      actionText="Create"
      description="Create a new hackathon"
    >
      <p>Modal content</p>
    </Modal>
  );
};

export default EnterKey;
