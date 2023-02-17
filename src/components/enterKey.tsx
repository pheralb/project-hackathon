import { Send } from "iconoir-react";
import { Modal, ButtonLg } from "@/ui";

const EnterKey = () => {
  return (
    <Modal
      btn={<ButtonLg icon={<Send width={30} />}>Enter hackathon key</ButtonLg>}
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
