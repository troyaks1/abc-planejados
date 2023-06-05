import { createContext, useState, useEffect, ReactNode } from 'react';
import LoginContext from '@/interfaces/frontend/LoginAuth.context';

export const LoginContext = createContext<LoginContext>({
  isLogged: false,
  login: () => {},
  logout: () => {},
})

export function LoginContextProvider({ ...props }: { children: ReactNode }) {
  const [isLogged, setLoggedIn] = useState(false);

  useEffect(() => { // On initial render, check if the user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      // TODO: Verify the token, or do some extra checks.
      setLoggedIn(true);
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('token', token); // Store token in localStorage
    setLoggedIn(true);
  }

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setLoggedIn(false);
  }

  return (
    <LoginContext.Provider value={{ isLogged, login, logout }}>
      {props.children}
    </LoginContext.Provider>
  );
}