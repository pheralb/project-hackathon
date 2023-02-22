import { Send } from "@/ui/icons";
import { Modal, Button } from "@/ui";

const EnterKey = () => {
  return (
    <Modal
      btn={<Button icon={<Send width={18} />}>Send project</Button>}
      title="Send project"
      action={() => alert("Create")}
      actionText="Create"
      description="Create a new hackathon"
    >
      
    </Modal>
  );
};

export default EnterKey;
