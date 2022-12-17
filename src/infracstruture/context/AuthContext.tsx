import React, { useState } from 'react';

type AppContextType = {
  isLoggedIn: Boolean;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContext = React.createContext<AppContextType>({
  isLoggedIn: true,
});

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [isLoggedIn] = useState(true);
  return (
    <AppContext.Provider value={{ isLoggedIn }}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
