import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the context type
interface LanguageContextType {
  pidgin: boolean;
  togglePidgin: () => void;
}

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Custom hook to use the context
export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};

// LanguageProvider component (as a regular function)
export function LanguageProvider({ children }: { children: ReactNode }): React.ReactElement {
  const [pidgin, setPidgin] = useState(false);

  const togglePidgin = () => {
    setPidgin((prevPidgin) => !prevPidgin);
  };

  return (
    <LanguageContext.Provider value={{ pidgin, togglePidgin }}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
