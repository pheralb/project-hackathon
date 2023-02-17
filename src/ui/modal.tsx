import type { ReactNode } from "react";
import { Cancel } from "iconoir-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./button";

interface ModalProps {
  btn: ReactNode;
  action?: () => void;
  actionText?: string;
  title: string;
  description: string;
  children: ReactNode;
  icon?: ReactNode;
}

const Modal = (props: ModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{props.btn}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-midnight bg-opacity-80 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] border border-neutral-800 bg-midnight p-[25px] font-sans opacity-100 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <div className="flex items-center justify-between">
            <Dialog.Title className="mb-4 text-xl font-medium">
              {props.title}
            </Dialog.Title>
          </div>
          {props.children}
          <div className="mt-6 flex items-center justify-end space-x-2">
            <Dialog.Close asChild>
              <Button aria-label="Close">Cancel</Button>
            </Dialog.Close>
            {props.action && (
              <Dialog.Close asChild>
                <Button onClick={props.action} icon={props.icon}>
                  {props.actionText}
                </Button>
              </Dialog.Close>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
