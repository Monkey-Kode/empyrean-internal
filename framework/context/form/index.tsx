import { createContext, FC, ReactNode, useContext, useReducer } from 'react';

interface State {
  'company-size': string; // checkbox 1
  role: string; // checkbox 2
  industry: string; // checkbox 3
  culture: string; // section 1 question 1
  'culture-benefits': string; // section 1 question 2
  attraction: string; // section 1 question 3
  retention: string; // section 1 question 4
  experience: string; // section 1 question 5
  strategy: string; // section 2 question 1
  'strategy-hr': string; // section 2 question 2
  'strategy-talent': string; // section 2 question 3
  'strategy-benefits': string; // section 2 question 4
  'strategy-aligned': string; // section 2 question 5
  personalization: string; // section 3 question 1
  'satisfaction-physical': string; // section 3 question 2
  'satisfaction-mental': string; // section 3 question 3
  automation: string; // section 4 question 1
  alerting: string; // section 4 question 2
  communication: string; // section 4 question 3
  adoption: string; // section 4 question 4
  offerings: string; // section 4 question 5
  satisfaction: string; // section 5 question 1
  'satisfaction-involved': string; // section 5 question 2
  analytics: string; // section 5 question 3
  'analytics-providers': string; // section 5 question 4
}
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

const initialFormState = {
  'company-size': '',
  role: '',
  industry: '',
  culture: '3',
  'culture-benefits': '3',
  attraction: '3',
  retention: '3',
  experience: '3',
  strategy: '3',
  'strategy-hr': '3',
  'strategy-talent': '3',
  'strategy-benefits': '3',
  'strategy-aligned': '3',
  personalization: '3',
  'satisfaction-physical': '3',
  'satisfaction-mental': '3',
  automation: '3',
  alerting: '3',
  communication: '3',
  adoption: '3',
  offerings: '3',
  satisfaction: '3',
  'satisfaction-involved': '3',
  analytics: '3',
  'analytics-providers': '3',
};

const FormStateContext = createContext<FormSateContextInterface | undefined>(
  undefined
);

const changeFormStateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.payload.name]: action.payload.value };
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
