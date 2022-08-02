import { useRouter } from 'next/router';
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

interface ThemeContextInterface {
  theme: string;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: 'white',
});

export const ThemeProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  let theme = 'white';
  const router = useRouter();
  if (router.pathname === '/participate' || '/contact') {
    theme = 'blue';
  }

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
