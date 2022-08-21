import * as React from "react";

const initialState = {
  loading: false,
  data: [],
  error: "",
  salesTotal: 0,
  subscriptionsTotal: 0,
};

export const StateContext = React.createContext();

export function StateProvider({ children }) {
  return (
    <StateContext.Provider value={initialState}>
      {children}
    </StateContext.Provider>
  );
}
