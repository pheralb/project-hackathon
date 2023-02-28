import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

import { Button, Link } from "@/ui";
import { toast } from "sonner";

const Header = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="fixed top-0 w-full py-3 px-5 font-medium text-gray-200">
      <div className="flex items-center justify-between">
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
            <Image
              src={session.user.image}
              width={24}
              height={24}
              className="rounded-full"
              alt={session.user.name}
            />
            <p>{session.user.name}</p>
            <span className="text-gray-400">|</span>
            <Button onClick={handleLogout}>Sign out</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
