import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps extends Dialog.DialogProps {};

export default function Modal(props: ModalProps) {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/80 data-[state=open]:animate-overlayShow fixed inset-0 z-50">
          <Dialog.Content className="fixed top-[50%] left-[50%] w-4/5 h-4/5 translate-x-[-50%] translate-y-[-50%] bg-black focus:outline-none">
            { props.children }
            <Dialog.Close asChild>
              <button
                className="bg-transparent text-[#A9F9DD] border-0 absolute -top-10 right-0 inline-flex h-[25px] text-[25px] font-bold w-[25px] appearance-none items-center justify-center rounded-lg focus:outline-none"
                aria-label="Close"
              >
                X
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}