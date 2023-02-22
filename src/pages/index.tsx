import { ArrowRight } from "iconoir-react";
import { Link } from "@/ui";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl md:text-3xl">
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
      </div>
    </>
  );
}
