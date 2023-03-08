import { Button } from "@/ui";
import { KeyAltPlus } from "@/ui/icons";
import { toast } from "sonner";

interface CopyKeyProps {
  url: string;
}

const CopyKey = (props: CopyKeyProps) => {
  const copyToClipboard = async (txt: string) => {
    try {
      const clipboardItem = new ClipboardItem({
        "text/plain": new Blob([txt], { type: "text/plain" }),
      });
      await navigator.clipboard.write([clipboardItem]);
    } catch (error) {
      await navigator.clipboard.writeText(txt);
    }
    toast.success("Copied successfully");
  };

  return (
    <Button
      icon={<KeyAltPlus width={18} />}
      onClick={() => copyToClipboard(props.url)}
    >
      Copy key
    </Button>
  );
};

export default CopyKey;
