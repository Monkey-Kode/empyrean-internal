import s from './Modal.module.css';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import EmailReportForm from '../EmailReportForm';

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
            enter={s.enter}
            enterFrom={s.enterFrom}
            enterTo={s.enterTo}
            leave={s.leave}
            leaveFrom={s.leaveFrom}
            leaveTo={s.leaveTo}
          >
            <div className={s.bg} />
          </Transition.Child>
          <div className={s.wrap}>
            <div className={s.content}>
              <Transition.Child
                as={Fragment}
                enter={s.enter}
                enterFrom={s.enterFromChild}
                enterTo={s.enterToChild}
                leave={s.leave}
                leaveFrom={s.leaveFromChild}
                leaveTo={s.leaveToChild}
              >
                <Dialog.Panel className={s.panel}>
                  <div>
                    <div className={s.panelInner}>
                      {/* <Dialog.Title as="h3" className={s.title}>
                        Form goes here
                      </Dialog.Title> */}
                      <div className={s.contentInner}>
                        <EmailReportForm />
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
