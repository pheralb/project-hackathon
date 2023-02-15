import { motion } from "framer-motion";
import { FrameSimple } from "iconoir-react";
import { ExternalLink } from "@/ui/link";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full py-3 px-5 font-medium text-gray-400">
      <motion.div
        className="flex flex-row items-center justify-between"
        initial={{ y: 0.3, opacity: 0 }}
        animate={{ y: 0, opacity: 0.9 }}
        transition={{
          duration: 0.4,
          delay: 0.5,
        }}
      >
        <p>v0.1.0</p>
        <div className="flex items-center space-x-1">
          <FrameSimple width={16} className="mr-1" />
          <p>Crafted by</p>
          <ExternalLink href="https://twitter.com/pheralb_" underline={true}>
            pheralb
          </ExternalLink>
          <p>&</p>
          <ExternalLink href="https://twitter.com/tmchein" underline={true}>
            tmchein
          </ExternalLink>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
