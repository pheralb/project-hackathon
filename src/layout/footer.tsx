import { FrameSimple } from "iconoir-react";
import { ExternalLink } from "@/ui";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full py-3 px-5 font-medium text-gray-400">
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
    </div>
  );
};

export default Footer;
