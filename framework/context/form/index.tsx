import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

type State = {
  [key: string]: string | number | undefined;
}[];
type Action = {
  type: 'UPDATE_FIELD';
  payload: {
    name: string;
    value: string;
  };
};

type Dispatch = (action: Action) => void;

interface FormSateContextInterface {
  state: State;
  dispatch: Dispatch;
}

const initialFormState = [
  { 'company-size': '', section: 0 },
  { role: '', section: 0 },
  { industry: '', section: 0 },
  { culture: '3', section: 1 },
  { 'culture-benefits': '3', section: 1 },
  { attraction: '3', section: 1 },
  { retention: '3', section: 1 },
  { experience: '3', section: 1 },
  { strategy: '3', section: 2 },
  { 'strategy-hr': '3', section: 2 },
  { 'strategy-talent': '3', section: 2 },
  { 'strategy-benefits': '3', section: 2 },
  { 'strategy-aligned': '3', section: 2 },
  { personalization: '3', section: 3 },
  { 'satisfaction-physical': '3', section: 3 },
  { 'satisfaction-mental': '3', section: 3 },
  { automation: '3', section: 4 },
  { alerting: '3', section: 4 },
  { communication: '3', section: 4 },
  { adoption: '3', section: 4 },
  { offerings: '3', section: 4 },
  { satisfaction: '3', section: 4 },
  { 'satisfaction-involved': '3', section: 4 },
  { analytics: '3', section: 4 },
  { 'analytics-providers': '3', section: 4 },
];

const FormStateContext = createContext<FormSateContextInterface | undefined>(
  undefined
);

const changeFormStateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      console.log('payload', action.payload);
      const currenField = state.find(
        (field) => Object.keys(field)[0] === action.payload.name
      );

      console.log('currenField', currenField);

      const newState =
        (currenField && [
          ...state.slice(0, state.indexOf(currenField)),
          {
            ...currenField,
            [action.payload.name]: action.payload.value,
          },
          ...state.slice(state.indexOf(currenField) + 1),
        ]) ||
        state;
      console.log('newState', newState);
      return newState;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const FormStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(
    changeFormStateReducer,
    initialFormState
  );

  return (
    <FormStateContext.Provider value={{ state, dispatch }}>
      {children}
    </FormStateContext.Provider>
  );
};

const useFormState = () => {
  const context = useContext(FormStateContext);
  if (context === undefined) {
    throw new Error('useFormState must be used within a FormStateProvider');
  }
  return context;
};

export { FormStateProvider, useFormState };
