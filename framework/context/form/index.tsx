import { createContext, FC, ReactNode, useContext, useReducer } from 'react';
import intialFormData from '../../../data/initialFormData';
export type SectionState =
  | {
      [key: string]:
        | {
            weight: number;
            fields: (
              | {
                  name: string;
                  value: string | number;
                  weight: number;
                }
              | undefined
            )[];
          }
        | undefined;
    }
  | undefined;
export type State = SectionState[];

type Action = {
  type: 'UPDATE_FIELD';
  payload: {
    name: string;
    value: string;
    section: number;
  };
};

type Dispatch = (action: Action) => void;

interface FormSateContextInterface {
  state: State;
  dispatch: Dispatch;
}

const FormStateContext = createContext<FormSateContextInterface | undefined>(
  undefined
);

const changeFormStateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      console.log('payload', action.payload);
      const { name, value, section } = action.payload;
      const sectionState = state.find((state) => {
        const keys = state && Object.keys(state)[0];
        return state && keys === `section_${section}`;
      });

      const newState =
        sectionState &&
        state.map((state) => {
          const keys = state && Object.keys(state)[0];
          if (keys === `section_${section}`) {
            return {
              [keys]: {
                ...sectionState?.[keys],
                fields: sectionState?.[keys]?.fields.map((field) => {
                  if (field?.name === name) {
                    return {
                      ...field,
                      value,
                    };
                  }
                  return field;
                }),
              },
            };
          }
          return state;
        });

      console.log('newState', newState);
      return newState;

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const FormStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(
    changeFormStateReducer as any,
    intialFormData
  );

  return (
    <FormStateContext.Provider value={{ state, dispatch } as any}>
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
