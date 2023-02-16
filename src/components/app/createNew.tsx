import { Plus } from "iconoir-react";

import { ButtonLg } from "@/ui/button";
import Modal from "@/ui/modal";

const CreateNew = () => {
  return (
    <Modal
      btn={<ButtonLg icon={<Plus width={30} />}>Create hackathon</ButtonLg>}
      title="Create new hackathon"
      action={() => alert("Create")}
      actionText="Create"
      description="Create a new hackathon"
    >
      <p>Modal content</p>
    </Modal>
  );
};

export default CreateNew;
