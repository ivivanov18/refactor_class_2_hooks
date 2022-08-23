import * as React from "react";

export const StateContext = React.createContext();

export function StateProvider({ state, children }) {
  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
}
