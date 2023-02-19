import { Tip } from "@/ui";
import CreateNew from "@/components/createNew";
import EnterKey from "@/components/enterKey";
import { GetServerSidePropsContext } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-2 text-3xl font-medium">Welcome</h1>
      <p>What do you want to do?</p>
      <div className="mt-6 max-w-md">
        <div className="mb-2 flex w-full items-center justify-between space-x-2">
          <CreateNew />
          <EnterKey />
        </div>
        <Tip>
          If you want to submit a project click on{" "}
          <strong>Enter hackathon key</strong>.
        </Tip>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
    },
  };
};

export default Dashboard;
