import { Button, ExternalLink, Input, Modal } from "@/ui";
import { ButtonStyles } from "@/ui/button";
import { FrameSimple } from "@/ui/icons";

interface ViewProjectProps {
  project_url: string;
}

const ViewProject = (props: ViewProjectProps) => {
  return (
    <Modal
      btn={<Button icon={<FrameSimple width={14} />}>View Project</Button>}
      title="Warning"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <p>
          The link that you will see below does not belong to Project Hackathon
          and may not be secure. Confirm if you want to access:
        </p>
        <Input value={props.project_url} disabled />
        <ExternalLink
          href={props.project_url}
          className={`w-full ${ButtonStyles}`}
        >
          <div className="flex w-full items-center justify-center space-x-2">
            <span>Continue</span>
          </div>
        </ExternalLink>
      </div>
    </Modal>
  );
};

export default ViewProject;
