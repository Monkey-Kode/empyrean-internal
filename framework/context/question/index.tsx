import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

interface State {
  page: number;
}
type Action = { type: 'next' | 'previous' };
type Dispatch = (action: Action) => void;
interface QuestionsIndexContextInterface {
  state: State;
  dispatch: Dispatch;
}
export const QuestionsIndexContext = createContext<
  QuestionsIndexContextInterface | undefined
>(undefined);

const changePageReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'next':
      return { page: state.page + 1 };
    case 'previous':
      return { page: state.page - 1 };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const QuestionsIndexProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(changePageReducer, {
    page: 0,
  });
  const value = { state, dispatch };
  return (
    <QuestionsIndexContext.Provider value={value}>
      {children}
    </QuestionsIndexContext.Provider>
  );
};

const useQuestionIndex = () => {
  const context = useContext(QuestionsIndexContext);
  if (context === undefined) {
    throw new Error('usePage must be used within a QuestionsIndexProvider');
  }
  return context;
};
export { QuestionsIndexProvider, useQuestionIndex };
