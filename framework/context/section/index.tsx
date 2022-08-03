import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

interface State {
  index: number;
}
type Action = { type: 'next' | 'previous' | 'set'; payload: number };
type Dispatch = (action: Action) => void;
interface SectionIndexContextInterface {
  state: State;
  dispatch: Dispatch;
}
export const SectionIndexContext = createContext<
  SectionIndexContextInterface | undefined
>(undefined);

const changeSectionIndexReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'next':
      return { index: state.index + action.payload };
    case 'previous':
      return { index: state.index - action.payload };
    case 'set':
      return { index: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const SectionIndexProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(changeSectionIndexReducer, { index: 0 });
  const value = { state, dispatch };
  return (
    <SectionIndexContext.Provider value={value}>
      {children}
    </SectionIndexContext.Provider>
  );
};

const useSectionIndex = () => {
  const context = useContext(SectionIndexContext);
  if (context === undefined) {
    throw new Error(
      'useSectionIndex must be used within a SectionIndexProvider'
    );
  }
  return context;
};
export { SectionIndexProvider, useSectionIndex };
