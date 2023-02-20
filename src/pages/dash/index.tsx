import { Tip } from "@/ui";
import CreateNew from "@/components/createNew";
import EnterKey from "@/components/enterKey";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-2 text-3xl font-medium">Welcome</h1>
      <p>What do you want to do?</p>
      <div className="mt-6 max-w-md border-b border-neutral-800 pb-3">
        <div className="mb-2 flex w-full items-center justify-between space-x-2">
          <CreateNew />
          <EnterKey />
        </div>
        <Tip>
          If you want to submit a project click on{" "}
          <strong>Enter hackathon key</strong>.
        </Tip>
      </div>
      sdfsd
    </div>
  );
};

export default Dashboard;
