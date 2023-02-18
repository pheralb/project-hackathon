import { motion } from "framer-motion";
import { ArrowRight } from "iconoir-react";
import { Link } from "@/ui";

export default function Home() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center space-y-4">
        <motion.div
          initial={{ y: -7, opacity: 0 }}
          animate={{ y: 0, opacity: 0.9 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="px-4 text-center md:px-0"
        >
          <h1 className="text-2xl md:text-3xl">
            An open source hackathon management
          </h1>
        </motion.div>
        <Link
          href="dash"
          underline={false}
          className="transition-all duration-200 hover:translate-x-0.5"
        >
          <motion.div
            initial={{ x: 0.3, opacity: 0 }}
            animate={{ x: 0, opacity: 0.9 }}
            transition={{
              duration: 0.4,
              delay: 1,
            }}
          >
            <div className="flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight width={16} />
            </div>
          </motion.div>
        </Link>
      </div>
    </>
  );
}
