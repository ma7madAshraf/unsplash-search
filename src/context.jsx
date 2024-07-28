import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [searchTerm, setSearchTerm] = useState("sea");
  const toggleIsDark = () => {
    const newVal = !isDark;
    setIsDark(newVal);
    document.body.classList.toggle("dark-theme", newVal);
  };
  return (
    <AppContext.Provider
      value={{ isDark, toggleIsDark, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
