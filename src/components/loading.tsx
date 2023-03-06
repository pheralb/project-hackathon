import { RaceBy, Ring } from "@uiball/loaders";

interface LoadingProps {
  text?: string;
}

const Loading = (props: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <span>{props.text || "Loading..."}</span>
      <div>
        <Ring size={25} color="#22c55e" />
      </div>
    </div>
  );
};

export default Loading;
