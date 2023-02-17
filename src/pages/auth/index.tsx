import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Button } from "@/ui";
import { GitHub } from "iconoir-react";

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
      router.push("/dash");
    } catch (error) {
      alert(error);
    }
  };

  return (
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
          loading={loading}
        >
          <span>Continue with Github</span>
        </Button>
      </motion.div>
    </div>
  );
};

export default Auth;
