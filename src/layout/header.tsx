import { motion } from "framer-motion";
import {
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

import { FrameSimple } from "iconoir-react";
import { Button, ExternalLink, Link } from "@/ui";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const supabaseClient = useSupabaseClient();
  const { session } = useSessionContext();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { error } = await supabaseClient.auth.signOut();
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="fixed top-0 w-full py-3 px-5 font-medium text-gray-200">
      <motion.div
        className="flex flex-row items-center justify-between"
        initial={{ y: 0.3, opacity: 0 }}
        animate={{ y: 0, opacity: 0.9 }}
        transition={{
          duration: 0.4,
          delay: 0.5,
        }}
      >
        <Link href="/" underline={false}>
          <div className="flex items-center space-x-3 transition-all duration-100 hover:text-white">
            <Image
              src="/images/phck.svg"
              width={40}
              height={40}
              alt="Project Hackathon Logo"
            />
            <p>Project Hackathon</p>
          </div>
        </Link>
        {session && (
          <div className="flex items-center space-x-3">
            <img
              src={session.user.user_metadata.avatar_url}
              className="h-6 w-6 rounded-full"
            />
            <p>{session.user.user_metadata.name}</p>
            <span className="text-gray-400">|</span>
            <Button onClick={handleLogout}>Sign out</Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Header;
