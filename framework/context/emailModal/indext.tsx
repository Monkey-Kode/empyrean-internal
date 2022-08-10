import { createContext, FC, ReactNode, useContext, useReducer } from 'react';
interface State {
  open: boolean;
}
type Action = {
  type: 'TOGGLE_MODAL';
};
type Dispatch = (action: Action) => void;
interface EmailModalContextInterface {
  state: State;
  dispatch: Dispatch;
}

const EmailModalContext = createContext<EmailModalContextInterface | undefined>(
  undefined
);

const changeEmailModalReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return { open: !state.open };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const EmailModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(changeEmailModalReducer, {
    open: false,
  });
  const value = { state, dispatch };
  return (
    <EmailModalContext.Provider value={value}>
      {children}
    </EmailModalContext.Provider>
  );
};

const useEmailModal = () => {
  const context = useContext(EmailModalContext);
  if (context === undefined) {
    throw new Error('useEmailModal must be used within a EmailModalProvider');
  }
  return context;
};
export { EmailModalProvider, useEmailModal };
