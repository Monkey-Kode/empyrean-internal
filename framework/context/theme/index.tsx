import { createContext, FC, ReactNode, useContext, useReducer } from 'react';
interface State {
  theme: string;
}
type Action = {
  type: 'UPDATE_THEME_COLOR';
  payload: 'white' | 'blue';
};
type Dispatch = (action: Action) => void;
interface ThemeContextInterface {
  state: State;
  dispatch: Dispatch;
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

const changeThemeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'UPDATE_THEME_COLOR':
      return { theme: action.payload };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(changeThemeReducer, {
    theme: 'blue',
  });
  const value = { state, dispatch };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
export { ThemeProvider, useTheme };
