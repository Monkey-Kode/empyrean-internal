import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useEmailModal } from '../../../framework/context/emailModal/indext';
import EmailReportForm from '../EmailReportForm';
import s from './EmailModal.module.css';
import cn from 'classnames';
import Button from '../../ui/Button';
import PardotForm from '../../forms/PardotForm';
const EmailModal = () => {
  const { state, dispatch } = useEmailModal();
  console.log('state', state);
  return (
    <div
      className={cn(s.root, {
        [s.show]: state.open === true,
        [s.hide]: state.open === false,
      })}
    >
      <Transition.Root show={true} as={Fragment}>
        <div
          className={cn(s.dialog, {
            [s.show]: state.open === true,
            [s.hide]: state.open === false,
          })}
        >
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
            <div
              className={s.content}
              //   onClick={() => {
              //     dispatch({ type: 'TOGGLE_MODAL' });
              //   }}
            >
              <Transition.Child
                as={Fragment}
                enter={s.enter}
                enterFrom={s.enterFromChild}
                enterTo={s.enterToChild}
                leave={s.leave}
                leaveFrom={s.leaveFromChild}
                leaveTo={s.leaveToChild}
              >
                <div className={s.panel}>
                  <div className={s.panelInner}>
                    <div className={s.contentInner}>
                      <div className={s.buttonWrapper}>
                        <Button
                          onClick={() => {
                            dispatch({ type: 'TOGGLE_MODAL' });
                          }}
                          className={s.button}
                          withIcon={false}
                        >
                          X
                        </Button>
                      </div>
                      <PardotForm />
                      {/* <EmailReportForm /> */}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Transition.Root>
    </div>
  );
};

export default EmailModal;
