import { Ring } from "@uiball/loaders";

interface LoadingProps {
  text?: string;
}

const Loading = (props: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      {props.text || "Loading..."}
      <Ring size={30} color="#22c55e" />
    </div>
  );
};

export default Loading;
