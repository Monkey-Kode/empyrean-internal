import s from './Modal.module.css';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Modal = ({ open, setOpen }: ModalProps) => {
  return (
    <div className={s.root}>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className={s.dialog} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={s.bg} />
          </Transition.Child>
          <div className={s.wrap}>
            <div className={s.content}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className={s.panel}>
                  <div>
                    <div className={s.panelInner}>
                      {/* <Dialog.Title as="h3" className={s.title}>
                        Form goes here
                      </Dialog.Title> */}
                      <div className={s.contentInner}>
                        <p className={s.p}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequatur amet labore.
                        </p>
                        form goes here
                      </div>
                    </div>
                  </div>
                  {/* <div className={s.buttonWrap}>
                    <button
                      type="button"
                      className={s.button}
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Modal;
