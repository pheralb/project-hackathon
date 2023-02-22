import { allHackathons } from "@/schema";
import { Link } from "@/ui";

interface hackathonCardProps {
  name: string;
  description: string;
  url: string;
}

const HackathonCard = (props: hackathonCardProps) => {
  return (
    <Link href={`/dash/${props.url}`} className="max-w-sm">
      <div className="cursor-pointer rounded-md border border-neutral-700/40 bg-neutral-800/50 p-4 transition-all duration-100 hover:bg-neutral-800">
        <h3 className="text-xl font-medium">{props.name}</h3>
        {props.description && (
          <p className="mt-1 text-gray-400">{props.description}</p>
        )}
        <div className="mt-4 flex items-center space-x-2 text-gray-400">
          <p className="font-mono">{props.url}</p>
          <span className="text-gray-400">-</span>
          <p>2 participants</p>
        </div>
      </div>
    </Link>
  );
};

export default HackathonCard;
