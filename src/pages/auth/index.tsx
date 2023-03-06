import { useState } from "react";
import Head from "next/head";
import { signIn } from "next-auth/react";

import { Button } from "@/ui";
import { Github } from "@/ui/icons";
import { toast } from "sonner";
import Up from "@/animations/up";

const Auth = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (provider: string) => {
    setLoading(true);
    try {
      await signIn(provider, {
        callbackUrl: `/app`,
      });
    } catch (error) {
      toast.error("Unable to log in. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Auth</title>
      </Head>
      <div className="flex h-screen flex-col items-center justify-center">
        <Up>
          <h1 className="mb-4 text-2xl font-medium">
            {loading ? "Logging in..." : "Sign in to continue"}
          </h1>
        </Up>
        <Up delay={0.2}>
          <Button
            icon={<Github width={20} />}
            onClick={() => handleLogin("github")}
            loadingstatus={loading}
          >
            <span>Continue with Github</span>
          </Button>
        </Up>
      </div>
    </>
  );
};

export default Auth;
