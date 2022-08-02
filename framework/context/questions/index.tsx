import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

interface State {
  page: number;
}
type Action = { type: 'next' | 'previous' };
type Dispatch = (action: Action) => void;
interface QuestionsContextInterface {
  state: State;
  dispatch: Dispatch;
}
export const QuestionsContext = createContext<
  QuestionsContextInterface | undefined
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

const QuestionsProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(changePageReducer, { page: 1 });
  const value = { state, dispatch };
  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
};

const useQuestionPage = () => {
  const context = useContext(QuestionsContext);
  if (context === undefined) {
    throw new Error('usePage must be used within a QuestionsProvider');
  }
  return context;
};
export { QuestionsProvider, useQuestionPage };
