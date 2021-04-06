import { createContext, useContext } from "react";

export const AppContext = createContext<{
  appData: { visits: number; questions: number };
}>({
  appData: { visits: 0, questions: 0 },
});

export const useAppContext = () => useContext(AppContext);
