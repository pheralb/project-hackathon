import { Button, Input } from "@/ui";
import { toast } from "sonner";

interface copyLinkProps {
  url: string;
}

const Copy = (props: copyLinkProps) => {
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
    <div className="flex w-full items-center space-x-2">
      <Input value={props.url} disabled />
      <Button onClick={() => copyToClipboard(props.url)}>Copy</Button>
    </div>
  );
};

export default Copy;
