import Image from "next/image";

import HackathonCard from "@/components/hackathonCard";
import { Link } from "@/ui";
import { ArrowRight } from "@/ui/icons";
import Up from "@/animations/up";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-5 py-2">
      <Up>
        <Image
          className="relative z-20"
          src="/images/phck_logo.svg"
          width={64}
          height={64}
          alt="Phck logo"
        />
      </Up>
      <h1 className="text-center text-2xl sm:text-left md:mt-4 md:text-3xl">
        An open source hackathon management
      </h1>
      <Link
        href="auth"
        underline={false}
        className="transition-all duration-200 hover:translate-x-0.5"
      >
        <div className="flex items-center space-x-2">
          <span>Get Started</span>
          <ArrowRight width={16} />
        </div>
      </Link>
      <div className="mt-4 mb-6 flex flex-col gap-4 md:flex-row md:gap-3">
        <HackathonCard
          name="Simple, as it should be"
          description="Create hackathons in no time, review and decide who wins your event"
        />
        <HackathonCard
          name="Share, create and participate"
          description="Share with friends and power your event with organization"
        />
      </div>
    </div>
  );
}
