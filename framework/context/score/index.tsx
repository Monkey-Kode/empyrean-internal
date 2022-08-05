import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

interface State {
  totalScore: number;
  sections: {
    [key: string]: [
      {
        [key: string]: string | number;
      }
    ];
  }[];
}
type Action = {
  type: 'UPDATE_SCORE';
  payload: {
    weight?: number; // weight for the section
    value?: number; // value for the section; summation of all questions in section
    section: {
      name: string;
      index: number;
      value: number;
    };
  };
};
type Dispatch = (action: Action) => void;

interface ScoreStateContextInterface {
  state: State;
  dispatch: Dispatch;
}

const initialScoreState = {
  totalScore: 0,
  sections: [],
};

const ScoreStateContext = createContext<ScoreStateContextInterface | undefined>(
  undefined
);

const changeScoreStateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'UPDATE_SCORE':
      console.log('payload', action.payload.section);
      const newState = {
        [`section_${action.payload.section.index}`]: [
          {
            [action.payload.section.name]: action.payload.section.value,
          },
        ],
      };
      const newSections = Array.from(state?.sections || []).push(newState);
      //   const newSections = state.sections.push(action.payload.section);

      console.log('newState', newState);

      return newSections;
    //   return state;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const ScoreStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(
    changeScoreStateReducer,
    initialScoreState
  );
  const value = { state, dispatch };
  return (
    <ScoreStateContext.Provider value={value}>
      {children}
    </ScoreStateContext.Provider>
  );
};

const useScoreState = () => {
  const context = useContext(ScoreStateContext);
  if (context === undefined) {
    throw new Error('useScoreState must be used within a ScoreStateProvider');
  }
  return context;
};
export { ScoreStateProvider, useScoreState };
