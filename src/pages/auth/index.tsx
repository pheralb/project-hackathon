import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Button } from "@/ui";
import { GitHub } from "iconoir-react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

const Auth = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const supabaseClient = useSupabaseClient();

  const handleLoginWithGithub = async () => {
    try {
      setLoading(true);
      await supabaseClient.auth.signInWithOAuth({
        provider: "github",
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Head>
        <title>Auth</title>
      </Head>
      <div className="flex h-screen flex-col items-center justify-center">
        <motion.div
          initial={{ y: -7, opacity: 0 }}
          animate={{ y: 0, opacity: 0.9 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="px-4 text-center md:px-0"
        >
          <h1 className="mb-5 text-2xl font-medium">
            {loading ? "Logging in..." : "Sign in to continue"}
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: 7, opacity: 0 }}
          animate={{ y: 0, opacity: 0.9 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
          }}
          className="flex flex-col items-center justify-center space-y-2"
        >
          <Button
            icon={<GitHub width={20} />}
            onClick={handleLoginWithGithub}
            loadingstatus={loading}
          >
            <span>Continue with Github</span>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // Create authenticated Supabase Client
  const supabase = createServerSupabaseClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session)
    return {
      redirect: {
        destination: "/dash",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
    },
  };
};

export default Auth;
