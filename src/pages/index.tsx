import HackathonCard from "@/components/hackathonCard";
import { Link } from "@/ui";
import { ArrowRight } from "@/ui/icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center gap-4 md:h-screen md:justify-center">
      <div className="relative mt-8 md:mt-0">
        <div className="absolute z-10 h-full w-full rounded-full bg-white opacity-30 blur-xl" />
        <Image
          className="relative z-20 w-20 md:w-32"
          src="/images/phck_logo.svg"
          width={128}
          height={128}
          alt="Phck logo"
        />
      </div>
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
      <div className="mt-4 flex flex-col gap-4 md:flex-row md:gap-8">
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
