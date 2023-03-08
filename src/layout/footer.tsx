import { ExternalLink } from "@/ui";
import { FrameSimple } from "@/ui/icons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 z-50 mt-5 w-full bg-neutral-900/80 py-3 px-5 font-medium text-gray-400">
      <div className="flex items-center justify-between">
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
    </footer>
  );
};

export default Footer;
