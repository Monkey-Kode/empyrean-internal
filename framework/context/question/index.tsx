import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

interface State {
  index: number;
}
type Action = { type: 'next' | 'previous' | 'set'; payload: number };
type Dispatch = (action: Action) => void;
interface QuestionsIndexContextInterface {
  state: State;
  dispatch: Dispatch;
}
const QuestionsIndexContext = createContext<
  QuestionsIndexContextInterface | undefined
>(undefined);

const changeQuestionIndexReducer = (state: State, action: Action) => {
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

const QuestionsIndexProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(changeQuestionIndexReducer, {
    index: -1,
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
    throw new Error(
      'useQuestionIndex must be used within a QuestionsIndexProvider'
    );
  }
  return context;
};
export { QuestionsIndexProvider, useQuestionIndex };
