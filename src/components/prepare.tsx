import React from "react";

interface PrepareProps {
  url: string;
}

const Prepare = (props: PrepareProps) => {
  const url = window.location.href;

  return (
    <div>
      <div className="flex flex-col space-y-8 rounded-md border border-neutral-800 p-5">
        <h1 className="text-2xl">🎉 Your hackathon is ready!</h1>
        <div>
          <h1 className="text-xl font-medium">1. Share your hackathon:</h1>
          <div className="ml-1 border-l border-neutral-800 p-3 text-neutral-400">
            <p>
              Share your hackathon with your friends by sending them the link
              below:
            </p>
            <div className="flex items-center space-x-2">
              <p>https://phck.vercel.app/send/{props.url}</p>
              <p className="font-medium text-neutral-400"></p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-medium">
            2. You will see all the projects here:
          </h1>
          <p className="text-neutral-400">
            After your friends submit their projects, you will see them here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prepare;
