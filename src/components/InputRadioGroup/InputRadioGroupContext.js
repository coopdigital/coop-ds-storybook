import { createContext, useContext } from "react";

export const RadioContext = createContext({
  inGroup: false,
});

export const useRadioContext = () => useContext(RadioContext);
