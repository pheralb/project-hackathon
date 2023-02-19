import { useState } from "react";
import Head from "next/head";
import { signIn } from "next-auth/react";

import { motion } from "framer-motion";
import { Button } from "@/ui";
import { GitHub } from "iconoir-react";

const Auth = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (provider: string) => {
    setLoading(true);
    try {
      await signIn(provider, {
        callbackUrl: `/dash`,
      });
    } catch (error) {
      alert(error);
      setLoading(false);
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
            onClick={() => handleLogin("github")}
            loadingstatus={loading}
          >
            <span>Continue with Github</span>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default Auth;
