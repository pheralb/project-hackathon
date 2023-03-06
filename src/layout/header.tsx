import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

import Up from "@/animations/up";
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
    <header className="fixed top-0 z-50 w-full bg-neutral-900/80 py-4 px-5 font-medium text-gray-200 md:py-3">
      <div className="flex items-center justify-between">
        <Link href="/" underline={false}>
          <div className="flex items-center space-x-3 transition-all duration-100 hover:text-white">
            <Image
              src="/images/phck.svg"
              width={40}
              height={40}
              alt="Project Hackathon Logo"
            />
            <p className="hidden md:block">Project Hackathon</p>
          </div>
        </Link>
        {session && (
          <div className="flex items-center space-x-3">
            <Up>
              <div className="flex items-center space-x-3">
                <Image
                  src={session.user.image}
                  width={24}
                  height={24}
                  className="rounded-full"
                  alt={session.user.name}
                />
                <p className="hidden md:block">{session.user.name}</p>
              </div>
            </Up>
            <Up delay={0.2}>
              <div className="flex items-center space-x-3">
                <span className="text-gray-400">|</span>
                <Button onClick={handleLogout}>Sign out</Button>
              </div>
            </Up>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
