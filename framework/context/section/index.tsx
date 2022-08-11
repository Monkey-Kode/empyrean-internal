import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

export interface SectionState {
  index: number;
}
export type SectionAction = {
  type: 'next' | 'prev' | 'set';
  payload: number;
};
export type SectionDispatch = (action: SectionAction) => void;
interface SectionIndexContextInterface {
  state: SectionState;
  dispatch: SectionDispatch;
}
export const SectionIndexContext = createContext<
  SectionIndexContextInterface | undefined
>(undefined);

const changeSectionIndexReducer = (
  state: SectionState,
  action: SectionAction
) => {
  switch (action.type) {
    case 'next':
      return { index: state.index + action.payload };
    case 'prev':
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
  const [state, dispatch] = useReducer(changeSectionIndexReducer, {
    index: -1,
  });
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
