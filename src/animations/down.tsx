import { motion } from "framer-motion";
import type { FC, ReactNode } from "react";

type DownProps = {
  children: ReactNode;
  delay?: number;
};

const Down: FC<DownProps> = ({ children, delay }) => (
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={{ y: 0, opacity: 0.9 }}
    transition={{
      duration: 0.4,
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);

export default Down;
