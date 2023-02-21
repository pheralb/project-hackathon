import { Ring } from "@uiball/loaders";
import React from "react";

interface LoadingProps {
  text?: string;
}

const Loading = (props: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {props.text || "Loading..."}
      <Ring size={30} color="white" />
    </div>
  );
};

export default Loading;
