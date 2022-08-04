import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

interface State {
  text: string;
}
type Action = { type: 'SET_TITLE'; payload: string };
type Dispatch = (action: Action) => void;

interface TitleContextInterface {
  state: State;
  dispatch: Dispatch;
}

const TitleContext = createContext<TitleContextInterface | undefined>(
  undefined
);

const titleReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return { text: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const TitleProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(titleReducer, {
    text: '',
  });
  const value = { state, dispatch };
  return (
    <TitleContext.Provider value={value}>{children}</TitleContext.Provider>
  );
};

const useTitle = () => {
  const context = useContext(TitleContext);
  if (context === undefined) {
    throw new Error('useTitle must be used within a TitleProvider');
  }
  return context;
};

export { TitleProvider, useTitle };
