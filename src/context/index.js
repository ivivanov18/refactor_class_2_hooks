import * as React from "react";
import { sales } from "../mocks";

const initialState = {
  loading: false,
  data: sales,
  error: "",
  salesTotal: 3466,
  subscriptionsTotal: 1492,
};

export const StateContext = React.createContext();

export function StateProvider({ children }) {
  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
}
