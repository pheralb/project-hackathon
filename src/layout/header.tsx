import { signOut, useSession } from "next-auth/react";

import { Button, Link } from "@/ui";
import Image from "next/image";

const Header = () => {
  const { data: session } = useSession();

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="fixed top-0 w-full py-3 px-5 font-medium text-gray-200">
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
          <img src={session.user.image} className="h-6 w-6 rounded-full" />
          <p>{session.user.name}</p>
          <span className="text-gray-400">|</span>
          <Button onClick={handleLogout}>Sign out</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
