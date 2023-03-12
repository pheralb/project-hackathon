import Link from "next/link";
import Card from "./card";

export interface hackathonCardProps {
  name: string;
  description: string;
  url?: string;
}

const HackathonCard = ({ name, description, url }: hackathonCardProps) => {
  return (
    <>
      {Boolean(url) ? (
        <Link
          href={`/app/${url}`}
          className="flex max-w-sm flex-col items-center"
        >
          <Card name={name} description={description} url={url} />
        </Link>
      ) : (
        <div className="flex max-w-xs flex-col items-center">
          <Card name={name} description={description} />
        </div>
      )}
    </>
  );
};

export default HackathonCard;
