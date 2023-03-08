import { Button, ExternalLink, Input, Modal } from "@/ui";
import { ButtonStyles } from "@/ui/button";
import { FrameSimple } from "@/ui/icons";

interface ViewProjectProps {
  title: string;
  description: string;
  project_url: string;
}

const ViewProject = (props: ViewProjectProps) => {
  return (
    <Modal
      btn={<Button icon={<FrameSimple width={14} />}>View</Button>}
      title={props.title}
    >
      <div className="flex flex-col items-center justify-center space-y-3">
        <div className="w-full border-b border-neutral-800 pb-3">
          <p>{props.description}</p>
        </div>
        <Input value={props.project_url} disabled />
        <ExternalLink
          href={props.project_url}
          className={`w-full ${ButtonStyles}`}
        >
          <div className="flex w-full items-center justify-center space-x-2">
            <span>View Project</span>
          </div>
        </ExternalLink>
        <p className="text-gray-400">
          The link that you will see below does not belong to Project Hackathon
          and may not be secure.
        </p>
      </div>
    </Modal>
  );
};

export default ViewProject;
