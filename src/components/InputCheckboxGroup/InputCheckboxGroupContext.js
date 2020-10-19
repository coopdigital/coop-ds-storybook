import { createContext, useContext } from "react";

export const CheckboxContext = createContext({
  inGroup: false,
});

export const useCheckboxContext = () => useContext(CheckboxContext);
