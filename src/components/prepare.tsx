import React from "react";
import Copy from "./copy";

interface PrepareProps {
  url: string;
}

const Prepare = (props: PrepareProps) => {
  return (
    <div>
      <div className="flex flex-col space-y-8 rounded-md border border-neutral-800 p-5">
        <h1 className="text-2xl">🎉 Your hackathon is ready!</h1>
        <div>
          <h1 className="text-xl font-medium">1. Share your hackathon.</h1>
          <div className="ml-1 border-l border-neutral-800 p-4 text-neutral-400">
            <p>Share your hackathon by sending them the link below:</p>
            <Copy url={`https://phck.vercel.app/send/${props.url}`} />
            <p>
              💡 Users will have to log in to Project Hackathon before
              submit the project.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-medium">
            2. You will see all projects here. Only you can see this page.
          </h1>
          <div className="ml-1 border-l border-neutral-800 p-4 text-neutral-400">
            <p>
              Here you can see all the projects that have been submitted & vote for the winner. Only you can see this page.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-medium">
            3. Finish your hackathon.
          </h1>
          <div className="ml-1 border-l border-neutral-800 p-4 text-neutral-400">
            <p>
              For finish your hackathon, click on <strong>Settings</strong> and go to <strong>finish hackathon</strong> tab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prepare;
